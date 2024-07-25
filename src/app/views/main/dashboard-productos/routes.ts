import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () => import('./dashboard-productos.component').then(m => m.DashboardProductosComponent)
  }
];

