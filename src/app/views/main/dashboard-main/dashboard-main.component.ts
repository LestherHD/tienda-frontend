import {Component, OnInit} from '@angular/core';
import {Services} from '../../../services/Services';
import {
  ButtonModule,
  CardBodyComponent,
  CardComponent,
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ThemeDirective
} from '@coreui/angular';
import {CommonModule, NgFor} from '@angular/common';
import {NavigationExtras, Router, RouterLink} from '@angular/router';
import {FunctionsUtils} from '../../../utils/FunctionsUtils';
import {ProductosFavoritos} from '../../../bo/ProductosFavoritos';
import {DataUtils} from '../../../utils/DataUtils';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-dashboard-main',
  standalone: true,
  imports: [ThemeDirective, NgFor, RouterLink, CarouselComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent,
  CarouselControlComponent, CardBodyComponent, CardComponent, CommonModule, ButtonModule],
  templateUrl: './dashboard-main.component.html',
  styleUrl: './dashboard-main.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [ // void => *
        animate('0.3s ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [ // * => void
        animate('0.3s ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class DashboardMainComponent implements OnInit{

  listResponse: ProductosFavoritos[];

  constructor(public services: Services, public functionsUtils: FunctionsUtils, private router: Router,
              public dataUtils: DataUtils){
    this.services.isDashboardUrl = false;
    this.listResponse = [];
  }

  ngOnInit(): void {

    this.services.getAllItemsFromEntity('productosFavoritos').subscribe( (res: ProductosFavoritos[])=> {
      this.listResponse = res;
      this.listResponse.forEach(x => {
        x.producto.imagen = 'data:image/jpeg;base64,'+x.producto.imagen;
      });
    }, error => {
      console.error(error);
    });

  }

  viajarADetalle(obj: ProductosFavoritos) {
    this.services.mostrarSpinner = true;
    this.services.activeButtonHeader = '';
    let navigationExtras: NavigationExtras = {
      queryParams: { idProduct: obj.producto.id}
    };
    this.functionsUtils.navigateOption(this.router, 'product-detail', navigationExtras);
  }
}
