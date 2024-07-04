import {Routes} from '@angular/router';
import {MainComponent} from './views/main/main.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainComponent,
    loadChildren: () => import('./views/main/routes').then(m => m.routes)
  },
  {
    path: '404',
    loadComponent: () => import('./views/pages/page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  { path: '**', redirectTo: '404' }
];
