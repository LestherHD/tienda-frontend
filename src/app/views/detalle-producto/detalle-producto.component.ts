import {Component, OnInit} from '@angular/core';
import {AlertComponent, ButtonDirective, CardBodyComponent, CardComponent, FormControlDirective} from '@coreui/angular';
import {CustomSpinnerComponent} from '../utils/custom-spinner/custom-spinner.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {ButtonsComponent} from '../buttons/buttons/buttons.component';
import {IconComponent, IconDirective} from '@coreui/icons-angular';
import {Services} from '../../services/Services';
import {FunctionsUtils} from '../../utils/FunctionsUtils';
import {Productos} from '../../bo/Productos';
import {ActivatedRoute} from '@angular/router';
import {ProductosRequestDTO} from '../../dto/ProductosRequestDTO';
import {Caracteristicas} from '../../bo/Caracteristicas';

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
  idProduct: any;
  listaCaracteristicas: Caracteristicas[];
  agregado: boolean;
  mapaProductos: Record<number, DetalleProducto> = {};
  cantidad: FormControl;

  constructor(private service: Services, functionUtils: FunctionsUtils,
              private route: ActivatedRoute) {
    this.agregado = false;
  }

  ngOnInit(): void {
    // localStorage.removeItem('mapaProductos');

    this.route.queryParams.subscribe( paramMap => {
      this.idProduct = paramMap['idProduct'];
    });

    this.cargarDatos();
    this.cargarMapaDesdeLocalStorage();
    console.log(this.mapaProductos);
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
      null, null), null, null);

    this.service.getFromEntityAndMethod('productos', 'getById', requestDTO).subscribe((res: Productos) =>{
      this.producto = res;
      this.producto.imagen = 'data:image/jpeg;base64,'+this.producto.imagen;
    }, errors =>{
      console.error(errors);
    });

  }

  getValoresPorIdCaracteristica(idCaracteristica: number): string[] {
    return this.producto.caracteristicas
      .filter(item => item.caracteristica.id === idCaracteristica)
      .map(item => item.valor);
  }

  filtrarCaracteristicasAsociadas(): Caracteristicas[] {
    // Obtener los IDs de las características asociadas
    const idsAsociados = this.producto.caracteristicas.map(pc => pc.caracteristica.id);

    // Filtrar la lista de características para incluir solo las que tienen IDs asociados
    return this.listaCaracteristicas.filter(c => idsAsociados.includes(c.id));
  }


  agregarACarrito(): void {
    this.agregado = true;
    if (this.mapaProductos[this.producto.id]) {
      this.mapaProductos[this.producto.id].cantidad += Number(this.cantidad.value);
    } else {
      this.mapaProductos[this.producto.id] = {
        detalles: this.producto,
        cantidad: Number(this.cantidad.value)
      };
    }
    this.guardarMapaEnLocalStorage();
  }

  guardarMapaEnLocalStorage(): void {
    localStorage.setItem('mapaProductos', JSON.stringify(this.mapaProductos));
  }

  cargarMapaDesdeLocalStorage(): void {
    const data = localStorage.getItem('mapaProductos');
    if (data) {
      this.mapaProductos = JSON.parse(data);
    }
  }

}

interface DetalleProducto {
  detalles: Productos;
  cantidad: number;
}
