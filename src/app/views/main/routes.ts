import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard-main/dashboard-main.component').then(m => m.DashboardMainComponent),
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'products',
        loadComponent: () => import('./dashboard-productos/dashboard-productos.component').then(m => m.DashboardProductosComponent),
        data: {
          title: 'Productos'
        }
      },
      {
        path: 'product-detail',
        loadComponent: () => import('./detalle-producto/detalle-producto.component').then(m => m.DetalleProductoComponent),
        data: {
          title: 'Detalle de producto'
        }
      },
      {
        path: 'shopping-cart',
        loadComponent: () => import('./carrito-compras/carrito-compras.component').then(m => m.CarritoComprasComponent),
        data: {
          title: 'Carrito de compras'
        }
      }
    ]
  }
];

