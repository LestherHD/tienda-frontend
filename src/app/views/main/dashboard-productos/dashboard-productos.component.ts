import {Component, OnDestroy, OnInit} from '@angular/core';
import {ButtonDirective, CardBodyComponent, CardComponent, FormControlDirective} from '@coreui/angular';
import {Services} from '../../../services/Services';
import {Productos} from '../../../bo/Productos';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgbPagination, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {ProductosRequestDTO} from '../../../dto/ProductosRequestDTO';
import {CustomSpinnerComponent} from '../../utils/custom-spinner/custom-spinner.component';
import {CommonModule} from '@angular/common';
import {ButtonsComponent} from '../../buttons/buttons/buttons.component';
import {IconComponent, IconDirective} from '@coreui/icons-angular';
import {FunctionsUtils} from '../../../utils/FunctionsUtils';
import {NavigationExtras, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {TipoProducto} from '../../../bo/TipoProducto';
import {Subject, takeUntil} from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-productos',
  standalone: true,
  imports: [CardComponent, CardBodyComponent, ButtonDirective, CustomSpinnerComponent, NgbPaginationModule,
  CommonModule, FormControlDirective, ReactiveFormsModule, ButtonDirective, ButtonsComponent, IconComponent, IconDirective],
  templateUrl: './dashboard-productos.component.html',
  styleUrl: './dashboard-productos.component.scss'
})
export class DashboardProductosComponent implements OnInit, OnDestroy {

  listResponse: Productos[];
  pagination: NgbPagination;

  valorBusqueda: FormControl;
  valorBusquedaBK: FormControl;
  tipoProducto: TipoProducto;

  private destroy$ = new Subject<TipoProducto>();
  private destroySearch$ = new Subject<String>();

  constructor(private service: Services, public functionsUtils: FunctionsUtils, private router: Router,
              private titleService: Title) {
    this.pagination = new NgbPagination();
    this.pagination.page = 0;
    this.pagination.pageSize = 30;
    this.pagination.maxSize = 6;
  }

  ngOnInit(): void {
    this.service.isDashboardUrl = true;
    this.valorBusqueda = new FormControl('', Validators.required)
    this.valorBusquedaBK = new FormControl('', Validators.required);

    this.titleService.setTitle('Holandesa');
    this.service.search$
      .pipe(
        takeUntil(this.destroySearch$),
        filter(value => value !== null))
      .subscribe(value => {
      this.valorBusqueda.setValue(value);
      this.filtrar();
    });

    this.service.productSearch$
      .pipe(
        takeUntil(this.destroy$),
        filter(value => value !== null)) // O cualquier otra condición)
      .subscribe( value => {
      this.valorBusqueda.setValue('');
      this.tipoProducto = value;
      this.filtrarProducto();
    });
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();

    this.destroySearch$.next(null);
    this.destroySearch$.complete();
  }

  filtrar(): void {
    this.valorBusquedaBK = new FormControl(this.valorBusqueda.value, Validators.required);
    this.tipoProducto = null;
    this.getValuesByPage(this.valorBusquedaBK.value, this.tipoProducto, 0, this.pagination.pageSize);
  }

  filtrarProducto(): void {
    this.valorBusquedaBK = new FormControl(this.valorBusqueda.value, Validators.required);
    this.getValuesByPage(this.valorBusquedaBK.value.toString().trim(), this.tipoProducto,0, this.pagination.pageSize);
  }

  changePage(event: any): void {
    this.pagination.page = event;
    this.getValuesByPage(this.valorBusquedaBK.value.toString().trim(), this.tipoProducto, this.pagination.page, this.pagination.pageSize);
  }

  getValuesByPage(valorBusqueda: string, tipoProducto: TipoProducto, pageValue: any, sizeValue: any): void{
    this.pagination.page = pageValue + 1;
    const request = new ProductosRequestDTO(new Productos(null, valorBusqueda, valorBusqueda, null, null,
      tipoProducto,null, null, null, 'A'), pageValue, sizeValue);

    this.service.mostrarSpinner = true;
    this.service.getFromEntityByFilter('productos', request).subscribe( res => {
      this.listResponse = res.content;
      if (this.listResponse && this.listResponse.length > 0){
        this.listResponse.forEach(x => {
          x.imagen = 'data:image/jpeg;base64,'+x.imagen;
        });
      }
      this.pagination.collectionSize = res.totalElements;
      this.service.mostrarSpinner = false;
    }, error1 => {
      this.service.mostrarSpinner = false;
      console.error('Error al consumir Get All');
    });
  }

  viajarADetalle(obj: Productos) {
    this.service.mostrarSpinner = true;
    this.service.activeButtonHeader = '';
    let navigationExtras: NavigationExtras = {
      queryParams: { idProduct: obj.id}
    };
    this.functionsUtils.navigateOption(this.router, 'product-detail', navigationExtras);
  }
}
