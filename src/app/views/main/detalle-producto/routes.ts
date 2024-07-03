import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'product-detail',
    loadComponent: () => import('./detalle-producto.component').then(m => m.DetalleProductoComponent),
    data: {
      title: 'Sucursales'
    }
  }
];

