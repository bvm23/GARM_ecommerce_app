import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Shop } from './features/shop/shop';
import { Product, resolveProductItem } from './features/product/product';
import { Auth } from './features/auth/auth';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'login',
    // loadComponent: () => import('./features/auth/auth').then((mod) => mod.Auth),
    component: Auth,
    outlet: 'auth',
  },
  {
    path: 'shop',
    component: Shop,
  },
  {
    path: 'item/:id',
    component: Product,
    resolve: { item: resolveProductItem },
  },
  {
    path: 'item-not-found',
    loadComponent: () =>
      import('./features/not-found/not-found').then((mod) => mod.NotFound),
  },
];
