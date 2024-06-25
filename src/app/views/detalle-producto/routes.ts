import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./detalle-producto.component').then(m => m.DetalleProductoComponent),
    data: {
      title: $localize`Detalle producto`
    }
  }
];

