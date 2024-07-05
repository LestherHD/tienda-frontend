import {Component, OnInit} from '@angular/core';
import {FunctionsUtils} from '../../../utils/FunctionsUtils';
import {Services} from '../../../services/Services';
import {Router} from '@angular/router';
import {
  AlertComponent,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  ContainerComponent,
  FormControlDirective, FormFeedbackComponent, FormFloatingDirective, TableDirective
} from '@coreui/angular';
import {CustomSpinnerComponent} from '../../utils/custom-spinner/custom-spinner.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonsComponent} from '../../buttons/buttons/buttons.component';
import {IconComponent, IconDirective} from '@coreui/icons-angular';
import {DetallePedido} from '../../../bo/DetallePedido';
import {Productos} from '../../../bo/Productos';

@Component({
  selector: 'app-carrito-compras',
  standalone: true,
  imports: [CardComponent, CardBodyComponent, ButtonDirective, CustomSpinnerComponent, NgbPaginationModule,
    CommonModule, FormControlDirective, ReactiveFormsModule, ButtonDirective, ButtonsComponent, IconComponent, IconDirective,
    AlertComponent, ContainerComponent, FormFeedbackComponent, FormFloatingDirective, FormsModule, TableDirective],
  templateUrl: './carrito-compras.component.html',
  styleUrl: './carrito-compras.component.scss'
})
export class CarritoComprasComponent implements OnInit{
  listResponse: DetallePedido[];
  totalCompra: number;
  mapaProductos: Record<number, DetalleProducto> = {};

  constructor(public functionsUtils: FunctionsUtils, public services: Services,
              private router: Router) {
    this.listResponse = [];
  }

  ngOnInit(): void {
    this.totalCompra = 0;
    this.cargarMapaDesdeLocalStorage();
    this.services.mostrarSpinner = false;
  }

  realizarCompra() {

  }

  eliminar(productId: number): void {
    if (this.mapaProductos[productId]) {
      delete this.mapaProductos[productId];
      this.guardarMapaEnLocalStorage();
    }
  }

  guardarMapaEnLocalStorage(): void {
    localStorage.setItem('mapaProductos', JSON.stringify(this.mapaProductos));
    this.cargarMapaDesdeLocalStorage();
  }

  cargarMapaDesdeLocalStorage(): void {
    this.totalCompra = 0;
    this.listResponse = [];
    const data = localStorage.getItem('mapaProductos');
    if (data) {
      this.mapaProductos = JSON.parse(data);
      const numeroDeProductos = Object.keys(this.mapaProductos).length;
      this.services.cantidadProductosCarrito = numeroDeProductos;
      for (const key in this.mapaProductos) {
        if (this.mapaProductos.hasOwnProperty(key)) {
          const cantidad = this.mapaProductos[key].cantidad;
          const obj = this.mapaProductos[key].producto;
          const detalle = new DetallePedido(null, obj, obj.descripcion, cantidad, obj.precio);
          this.listResponse.push(detalle);
          this.totalCompra += Number((cantidad * obj.precio));
        }
      }
    }
  }
}

interface DetalleProducto {
  producto: Productos;
  cantidad: number;
}
