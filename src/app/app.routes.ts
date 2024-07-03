import {Routes} from '@angular/router';
import {MainComponent} from './views/main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        // component: DetallePedido,
        loadChildren: () => import('./views/main/routes').then((m) => m.routes)
      },
    ]
  },

  // {
  //   path: '',
  //   component: DashboardProductosComponent,
  //   data: {
  //     title: 'Home'
  //   },
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () => import('./views/dashboard-productos/routes').then((m) => m.routes)
  //     },
  //     {
  //       path: 'product-detail',
  //       loadChildren: () => import('./views/detalle-producto/routes').then((m) => m.routes)
  //     }
  //   ]
  // },
  {
    path: '404',
    loadComponent: () => import('./views/pages/page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./views/pages/page500/page500.component').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    loadComponent: () => import('./views/pages/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    loadComponent: () => import('./views/pages/register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  },
  { path: '**', redirectTo: 'dashboard' }
];
