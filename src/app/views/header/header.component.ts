import {Component, OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {FunctionsUtils} from '../../utils/FunctionsUtils';
import {CommonModule} from '@angular/common';
import {BadgeComponent, ButtonDirective, FormControlDirective} from '@coreui/angular';
import {ButtonsComponent} from '../buttons/buttons/buttons.component';
import {IconComponent, IconDirective} from '@coreui/icons-angular';
import {Services} from '../../services/Services';
import {NavigationExtras, Router} from '@angular/router';
import {Productos} from '../../bo/Productos';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormControlDirective, ReactiveFormsModule,
    ButtonDirective, ButtonsComponent, IconComponent, IconDirective, BadgeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  valorBusqueda: FormControl;
  valorBusquedaBK: FormControl;
  mapaProductos: Record<number, DetalleProducto> = {};


  constructor(public functionsUtils: FunctionsUtils, public services: Services,
              private router: Router) {
  }

  ngOnInit(): void {
    this.valorBusqueda = new FormControl('', Validators.required);
    this.filtrar();
    this.cargarMapaDesdeLocalStorage();
  }


  filtrar(): void {
    this.valorBusquedaBK = new FormControl(this.valorBusqueda.value, Validators.required);
    this.services.setSearchValue(this.valorBusquedaBK);
  }

  setActive(buttonName: string) {
    this.services.activeButtonHeader = buttonName;
  }

  viajarInicio() {
    this.functionsUtils.navigateOption(this.router, 'dashboard', new class implements NavigationExtras {});
  }

  cargarMapaDesdeLocalStorage(): void {
    const data = localStorage.getItem('mapaProductos');
    if (data) {
      this.mapaProductos = JSON.parse(data);
      const numeroDeProductos = Object.keys(this.mapaProductos).length;
      this.services.cantidadProductosCarrito = numeroDeProductos;
    }
  }
}

interface DetalleProducto {
  detalles: Productos;
  cantidad: number;
}
