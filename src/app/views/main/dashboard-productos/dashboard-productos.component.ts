import {Component, OnInit} from '@angular/core';
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

@Component({
  selector: 'app-dashboard-productos',
  standalone: true,
  imports: [CardComponent, CardBodyComponent, ButtonDirective, CustomSpinnerComponent, NgbPaginationModule,
  CommonModule, FormControlDirective, ReactiveFormsModule, ButtonDirective, ButtonsComponent, IconComponent, IconDirective],
  templateUrl: './dashboard-productos.component.html',
  styleUrl: './dashboard-productos.component.scss'
})
export class DashboardProductosComponent implements OnInit{

  listResponse: Productos[];
  pagination: NgbPagination;

  valorBusqueda: FormControl;
  valorBusquedaBK: FormControl;

  constructor(private service: Services, public functionsUtils: FunctionsUtils, private router: Router) {
    this.pagination = new NgbPagination();
    this.pagination.page = 0;
    this.pagination.pageSize = 30;
    this.pagination.maxSize = 6;
  }

  ngOnInit(): void {

    this.service.search$.subscribe(value => {
      this.valorBusqueda = value;
      this.filtrar();
    });

    this.valorBusqueda = new FormControl('', Validators.required);
    this.getValuesByPage('', this.pagination.page, this.pagination.pageSize);
  }

  filtrar(): void {
    this.valorBusquedaBK = new FormControl(this.valorBusqueda.value, Validators.required);
    this.getValuesByPage(this.valorBusquedaBK.value.toString().trim(), 0, this.pagination.pageSize);
  }

  changePage(event: any): void {
    this.pagination.page = event;
    this.getValuesByPage(this.valorBusquedaBK.value.toString().trim(), this.pagination.page, this.pagination.pageSize);
  }

  getValuesByPage(valorBusqueda: string, pageValue: any, sizeValue: any): void{
    this.pagination.page = pageValue + 1;
    const request = new ProductosRequestDTO(new Productos(null, valorBusqueda, valorBusqueda, null, null,
      null,null, null, null), pageValue, sizeValue);

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
    this.service.activeButtonHeader = '';
    let navigationExtras: NavigationExtras = {
      queryParams: { idProduct: obj.id}
    };
    this.functionsUtils.navigateOption(this.router, 'product-detail', navigationExtras);
  }
}
