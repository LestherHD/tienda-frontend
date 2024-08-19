import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'knoweachother',
    loadComponent: () => import('./conozcamonos.component').then(m => m.ConozcamonosComponent)
  }
];

