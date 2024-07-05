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

  constructor(public functionsUtils: FunctionsUtils, public services: Services,
              private router: Router) {
    this.listResponse = [];
  }

  ngOnInit(): void {
    this.cargarMapaDesdeLocalStorage();
    this.services.mostrarSpinner = false;
  }

  realizarCompra() {

  }

  eliminar(item: any) {
    
  }

  cargarMapaDesdeLocalStorage(): void {
    const data = localStorage.getItem('mapaProductos');
    if (data) {
      const mapaProductos = JSON.parse(data);
      for (const key in mapaProductos) {
        if (mapaProductos.hasOwnProperty(key)) {
          const cantidad = mapaProductos[key].cantidad;
          console.log('cantidad: ', cantidad);
          const obj = mapaProductos[key].detalles;
          console.log(obj);
          const detalle = new DetallePedido(null, obj, obj.descripcion, cantidad, obj.precio);
          this.listResponse.push(detalle);
        }
      }

    }
  }

}
