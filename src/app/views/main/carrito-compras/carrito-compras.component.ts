import {Component, OnInit} from '@angular/core';
import {FunctionsUtils} from '../../../utils/FunctionsUtils';
import {Services} from '../../../services/Services';
import {NavigationExtras, Router} from '@angular/router';
import {
  AlertComponent,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  ContainerComponent,
  FormControlDirective,
  FormFeedbackComponent,
  FormFloatingDirective,
  FormSelectDirective,
  InputGroupComponent,
  TableDirective
} from '@coreui/angular';
import {CustomSpinnerComponent} from '../../utils/custom-spinner/custom-spinner.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {ButtonsComponent} from '../../buttons/buttons/buttons.component';
import {IconComponent, IconDirective} from '@coreui/icons-angular';
import {DetallePedido} from '../../../bo/DetallePedido';
import {Productos} from '../../../bo/Productos';
import {DataUtils} from '../../../utils/DataUtils';
import {SelectComponent} from '../../forms/select/select.component';
import {Sucursales} from '../../../bo/Sucursales';
import {Pedidos} from '../../../bo/Pedidos';

function onlyNumbersAndSpaces(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  if (!/^[0-9\s]+$/.test(value)) {
    return { onlyNumbersAndSpaces: true };
  }

  return null;
}

@Component({
  selector: 'app-carrito-compras',
  standalone: true,
  imports: [CardComponent, CardBodyComponent, ButtonDirective, CustomSpinnerComponent, NgbPaginationModule,
    CommonModule, FormControlDirective, ReactiveFormsModule, ButtonDirective, ButtonsComponent, IconComponent, IconDirective,
    AlertComponent, ContainerComponent, FormFeedbackComponent, FormFloatingDirective, FormsModule, TableDirective, InputGroupComponent,
  SelectComponent, FormSelectDirective],
  templateUrl: './carrito-compras.component.html',
  styleUrl: './carrito-compras.component.scss'
})
export class CarritoComprasComponent implements OnInit{
  listResponse: DetallePedido[];
  totalCompra: number;
  mapaProductos: Record<number, DetalleProducto> = {};
  form: FormGroup<{ nombres: any; apellidos: any; telefono: any; departamento: any; sucursal: any;
    metodoPago: any;}>;
  formMetodoPago: FormGroup<{ nombres: any; apellidos: any; telefono: any; departamento: any; sucursal: any;
    metodoPago: any;}>;
  listaSucursales: Sucursales[];
  listaSucursalesFiltrada: Sucursales[];
  listaMetodoPago: any = [{id: 'E', nombre: 'Efectivo'}, {id: 'T', nombre: 'Tarjeta'}];
  type: string;
  mensaje: string;
  deshabilitarBotones = false;
  mostrarMensaje = false;
  mostrarModal: boolean;

  constructor(public functionsUtils: FunctionsUtils, public services: Services,
              public dataUtils: DataUtils,
              private router: Router) {
    this.listResponse = [];
    this.type = '';
    this.mensaje = '';
    this.mostrarMensaje = false;
    this.deshabilitarBotones = false;
  }

  ngOnInit(): void {
    this.totalCompra = 0;
    this.cargarMapaDesdeLocalStorage();
    this.services.mostrarSpinner = false;
    this.form = new FormGroup({
      nombres: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      telefono: new FormControl('', [Validators.required, onlyNumbersAndSpaces, Validators.minLength(8)]),
      departamento: new FormControl('', Validators.required),
      sucursal: new FormControl('', Validators.required),
      metodoPago: new FormControl('E', Validators.required)
    });

    this.form.controls.departamento.setValue("1");

    this.services.getAllItemsFromEntity('sucursales').subscribe((res: Sucursales[]) =>{
      this.listaSucursales = res;
      this.filtrarLista();
    }, error => {
      console.error(error);
    });
  }

  realizarCompra() {

    if(this.form.controls.metodoPago.value === 'E'){
      this.finalizarCompra();
    } else if (this.form.controls.metodoPago.value === 'T'){

    }
  }

  mostrarModalMetodoPago(){

  }

  finalizarCompra(){
    this.deshabilitarBotones = true;
    const objSucursal: Sucursales = this.listaSucursalesFiltrada && this.listaSucursalesFiltrada.length > 0 ?
      this.listaSucursalesFiltrada.find(x => x.id === Number(this.form.controls.sucursal.value)) : null;

    const pedido = new Pedidos(null, 'N', this.form.controls.nombres.value, this.form.controls.apellidos.value,
      this.form.controls.telefono.value, this.form.controls.departamento.value, objSucursal, this.form.controls.metodoPago.value,
      this.listResponse, this.totalCompra);

    this.services.saveEntity('pedidos', pedido).subscribe( res => {
      this.type = res.error ? 'danger' : 'success';
      this.mensaje = res.mensaje;
      this.mostrarMensaje = true;
      setTimeout(() => {
        this.mostrarMensaje = false;
        this.deshabilitarBotones = res.error ? false : true;
        if (!res.error){
          localStorage.removeItem('mapaProductos');
          this.cargarMapaDesdeLocalStorage();
          this.functionsUtils.navigateOption(this.router, '', new class implements NavigationExtras {});
        }
      } , 2000);

    }, error1 => {
      this.deshabilitarBotones = false;
      this.type = 'danger';
      this.mensaje = 'Ha ocurrido un error al insertar los datos';
      this.mostrarMensaje = true;
      setTimeout(() => {
        this.mostrarMensaje = false;
      } , 1500);
      console.error('Error al consumir Post');
    });
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
    this.services.cantidadProductosCarrito = 0;
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
          const producto = this.mapaProductos[key].producto;
          const caracteristicas = this.mapaProductos[key].caracteristicas;
          const descripcion = producto.descripcion;

          var descripcionFinal = descripcion;

          if (caracteristicas){
            descripcionFinal += '<br><span class="fw-bold"> Características:</span> ';
            Object.entries(caracteristicas).forEach(([clave, valor]) => {
              descripcionFinal += ' <br><span class="fw-semibold">' + clave + ': </span>'+valor + ',';
            });
            descripcionFinal = descripcionFinal.substring(0, descripcionFinal.length - 1);
          }


          const detalle = new DetallePedido(null, null, descripcionFinal, cantidad, producto.precio, producto);
          this.listResponse.push(detalle);
          this.totalCompra += Number((cantidad * producto.precio));
        }
      }
    }
  }

  filtrarLista(){
    this.form.controls.sucursal.setValue(null);
    this.listaSucursalesFiltrada = this.listaSucursales.filter(x => x.departamento === this.form.controls.departamento.value)
    if (this.listaSucursalesFiltrada && this.listaSucursalesFiltrada.length > 0){
      this.form.controls.sucursal.setValue(this.listaSucursalesFiltrada[0].id);
    }
  }

  closeModalMetodoPago() {
    this.mostrarModal = false;
  }

  resetFormMetodoPago(){

  }


}



interface DetalleProducto {
  producto: Productos;
  cantidad: number;
  caracteristicas: any;
}
