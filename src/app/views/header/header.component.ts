import {Component, OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {FunctionsUtils} from '../../utils/FunctionsUtils';
import {CommonModule} from '@angular/common';
import {
  BadgeComponent,
  ButtonDirective,
  DropdownComponent,
  DropdownModule,
  FormControlDirective
} from '@coreui/angular';
import {ButtonsComponent} from '../buttons/buttons/buttons.component';
import {IconComponent, IconDirective} from '@coreui/icons-angular';
import {Services} from '../../services/Services';
import {NavigationExtras, Router} from '@angular/router';
import {Productos} from '../../bo/Productos';
import {DataUtils} from '../../utils/DataUtils';
import {TipoProducto} from '../../bo/TipoProducto';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormControlDirective, ReactiveFormsModule,
    ButtonDirective, ButtonsComponent, IconComponent, IconDirective, BadgeComponent, DropdownComponent, DropdownModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  valorBusqueda: FormControl;
  valorBusquedaBK: FormControl;
  mapaProductos: Record<number, DetalleProducto> = {};
  listaTipoProducto: TipoProducto[];
  isDropdownOpen = false;

  constructor(public functionsUtils: FunctionsUtils, public services: Services,
              private router: Router, public dataUtils: DataUtils) {
  }

  ngOnInit(): void {
    this.isDropdownOpen = false;
    this.valorBusqueda = new FormControl('', Validators.required);
    // this.filtrar();
    this.cargarMapaDesdeLocalStorage();
    this.services.getAllItemsFromEntity('tipoProducto').subscribe( (res: TipoProducto[]) => {
      this.listaTipoProducto = res;
    }, error => {
      console.error(error);
    });
  }

  filtrar(): void {
    if (this.services.isDashboardUrl){
      this.services.setSearchValue(this.valorBusqueda.value);
    } else {
      this.viajarInicio();
      this.services.setSearchValue(this.valorBusqueda.value);
      this.services.setProductSearchValue(null);
    }
  }

  filtrarBotonInicio(): void {
    if (this.services.isDashboardUrl){
      this.valorBusqueda.setValue('');
      this.services.setSearchValue('');
    } else {
      this.viajarInicio();
      this.valorBusqueda.setValue('');
      this.services.setSearchValue('');
      this.services.setProductSearchValue(null);
    }
  }

  filtrarProducto(tipoProducto: TipoProducto): void {
    this.valorBusqueda.setValue('')
    this.valorBusquedaBK = new FormControl(this.valorBusqueda.value, Validators.required);
    if (this.services.isDashboardUrl){
      this.services.setProductSearchValue(tipoProducto);
    } else {
      this.viajarInicio();
      this.services.setProductSearchValue(tipoProducto);
    }
  }

  setActive(buttonName: string) {
    this.services.activeButtonHeader = buttonName;
  }

  viajarInicio() {
    this.functionsUtils.navigateOptionUrl(this.router, 'products');
  }

  viajarMain() {
    this.functionsUtils.navigateOptionUrl(this.router, 'dashboard');
  }

  viajarConozcamonos() {
    this.functionsUtils.navigateOptionUrl(this.router, 'knoweachother');
  }

  cargarMapaDesdeLocalStorage(): void {
    const data = localStorage.getItem('mapaProductos');
    if (data) {
      this.mapaProductos = JSON.parse(data);
      const numeroDeProductos = Object.keys(this.mapaProductos).length;
      this.services.cantidadProductosCarrito = numeroDeProductos;
    }
  }

  viajarACarrito() {
    this.services.mostrarSpinner = true;
    this.functionsUtils.navigateOption(this.router, 'shopping-cart', new class implements NavigationExtras {});
    this.services.mostrarSpinner = false;
  }
}

interface DetalleProducto {
  producto: Productos;
  cantidad: number;
}
