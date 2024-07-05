import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'shopping-cart',
    loadComponent: () => import('./carrito-compras.component').then(m => m.CarritoComprasComponent)
  }
];

