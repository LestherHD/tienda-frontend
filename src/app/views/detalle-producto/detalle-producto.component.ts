import {Component, OnInit} from '@angular/core';
import {AlertComponent, ButtonDirective, CardBodyComponent, CardComponent, FormControlDirective} from '@coreui/angular';
import {CustomSpinnerComponent} from '../utils/custom-spinner/custom-spinner.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
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

  constructor(private service: Services, functionUtils: FunctionsUtils,
              private route: ActivatedRoute) {
    this.agregado = false;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe( paramMap => {
      this.idProduct = paramMap['idProduct'];
    });

    this.cargarDatos();
  }

  cargarDatos(){

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
      console.log(this.producto);
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


  agregarACarrito() {
    this.agregado = true;
    // localStorage.setItem('usuario', JSON.stringify(usuario));
  }
}
