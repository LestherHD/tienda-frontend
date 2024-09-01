import {Component, OnInit} from '@angular/core';
import {AlertComponent, ButtonDirective, CardBodyComponent, CardComponent, FormControlDirective} from '@coreui/angular';
import {CustomSpinnerComponent} from '../../utils/custom-spinner/custom-spinner.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {ButtonsComponent} from '../../buttons/buttons/buttons.component';
import {IconComponent, IconDirective} from '@coreui/icons-angular';
import {Services} from '../../../services/Services';
import {FunctionsUtils} from '../../../utils/FunctionsUtils';
import {Productos} from '../../../bo/Productos';
import {ActivatedRoute} from '@angular/router';
import {ProductosRequestDTO} from '../../../dto/ProductosRequestDTO';
import {Caracteristicas} from '../../../bo/Caracteristicas';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [CardComponent, CardBodyComponent, ButtonDirective, CustomSpinnerComponent, NgbPaginationModule,
    CommonModule, FormControlDirective, ReactiveFormsModule, ButtonDirective, ButtonsComponent, IconComponent, IconDirective,
    AlertComponent],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.scss'
})
export class DetalleProductoComponent implements OnInit{

  producto: Productos;
  precioBase: number;
  idProduct: any;
  listaCaracteristicas: Caracteristicas[];
  agregado: boolean;
  mapaProductos: Record<string, DetalleProducto> = {};
  cantidad: FormControl;
  caracteristicasSeleccionadas: { [nombre: string]: any } = {};
  preciosSeleccionados: { [nombre: string]: any } = {};
  filteredCaracteristicas: Caracteristicas[] = [];

  constructor(public service: Services, public functionUtils: FunctionsUtils,
              private route: ActivatedRoute, private titleService: Title) {
    this.agregado = false;
  }

  ngOnInit(): void {
    // localStorage.removeItem('mapaProductos');
    this.service.isDashboardUrl = false;

    this.route.queryParams.subscribe( paramMap => {
      this.idProduct = paramMap['idProduct'];
    });

    this.cargarDatos();
    this.cargarMapaDesdeLocalStorage();
    this.service.mostrarSpinner = false;
  }

  cargarDatos(){
    this.producto = null;
    this.cantidad = new FormControl('1', Validators.required);
    this.service.getAllItemsFromEntity('caracteristicas').subscribe( (res: Caracteristicas[])=>{
      this.listaCaracteristicas = res;
    }, error => {
      console.error(error);
    });

    const requestDTO: ProductosRequestDTO = new ProductosRequestDTO(new Productos(this.idProduct, 'Prueba', null, null, null, null, null,
      null, null, null), null, null);

    this.service.getFromEntityAndMethod('productos', 'getById', requestDTO).subscribe((res: Productos) =>{
      this.producto = res;
      this.precioBase = this.producto.precio;
      this.filteredCaracteristicas = this.filtrarCaracteristicasAsociadas();
      this.titleService.setTitle('Holandesa - ' + this.producto.nombre);
      this.producto.imagen = 'data:image/jpeg;base64,'+this.producto.imagen;
    }, errors =>{
      console.error(errors);
    });

  }

  getValoresPorIdCaracteristica(caracteristica: Caracteristicas): string[] {
    const obj = this.producto.caracteristicas
      .filter(item => item.caracteristica.id === caracteristica.id)
      .map(item => item.valor);


    if (obj){
      this.onSeleccionarValorCaracteristica(this.producto, caracteristica, null, null);
    }
    return obj;
  }

  filtrarCaracteristicasAsociadas(): Caracteristicas[] {
    // Obtener los IDs de las características asociadas
    const idsAsociados = this.producto.caracteristicas.map(pc => pc.caracteristica.id);

    // Filtrar la lista de características para incluir solo las que tienen IDs asociados
    const list = this.listaCaracteristicas.filter(c => idsAsociados.includes(c.id));
    list.forEach(x => {
      x.listaValores = this.getValoresPorIdCaracteristica(x);
    });
    return list;
  }

  agregarACarrito(): void {
    this.agregado = true;
    const valor: string = this.producto.id + JSON.stringify(this.caracteristicasSeleccionadas);
    if (this.mapaProductos[valor]) {
      this.mapaProductos[valor].cantidad += Number(this.cantidad.value);
    } else {
      this.mapaProductos[valor] = {
        producto: this.producto,
        cantidad: Number(this.cantidad.value),
        caracteristicas: this.caracteristicasSeleccionadas
      };
    }
    this.guardarMapaEnLocalStorage();
  }

  guardarMapaEnLocalStorage(): void {
    localStorage.setItem('mapaProductos', JSON.stringify(this.mapaProductos));
    this.cargarMapaDesdeLocalStorage();
  }

  cargarMapaDesdeLocalStorage(): void {
    const data = localStorage.getItem('mapaProductos');
    if (data) {
      this.mapaProductos = JSON.parse(data);
      const numeroDeProductos = Object.keys(this.mapaProductos).length;
      this.service.cantidadProductosCarrito = numeroDeProductos;
    }
  }

  onSeleccionarValorCaracteristica(producto: Productos, caracteristicas: Caracteristicas, event: any, valor: string) {

    let caracteristicaSeleccionada = null;
    if (event == null){
      caracteristicaSeleccionada = producto.caracteristicas.find(x => x.valor === valor);
      caracteristicas.precio = caracteristicaSeleccionada && caracteristicaSeleccionada.precio ? caracteristicaSeleccionada.precio : 0;
      this.caracteristicasSeleccionadas[caracteristicas.nombre] = valor;
      this.preciosSeleccionados[caracteristicas.nombre] = caracteristicas ? caracteristicas.precio : 0;
    } else {
      caracteristicaSeleccionada = producto.caracteristicas.find(x => x.valor === event.target.value);
      caracteristicas.precio = caracteristicaSeleccionada && caracteristicaSeleccionada.precio ? caracteristicaSeleccionada.precio : 0;
      this.caracteristicasSeleccionadas[caracteristicas.nombre] = event.target.value;
      this.preciosSeleccionados[caracteristicas.nombre] = caracteristicas ? caracteristicas.precio : 0;
    }

    this.producto.precio = this.precioBase;

    for (const nombre in this.preciosSeleccionados) {
      if (this.preciosSeleccionados.hasOwnProperty(nombre)) {
        const valor = this.preciosSeleccionados[nombre];
        console.log(`Producto: ${nombre}, Precio: ${valor}`);

        this.producto.precio += valor;

      }
    }
  }

}

interface DetalleProducto {
  producto: Productos;
  cantidad: number;
  caracteristicas: any;
}
