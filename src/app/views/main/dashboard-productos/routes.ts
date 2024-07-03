import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard-productos.component').then(m => m.DashboardProductosComponent),
    data: {
      title: $localize`Dashboard`
    }
  }
];

