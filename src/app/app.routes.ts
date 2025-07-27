import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Shop } from './features/shop/shop';
import { Product, resolveProductItem } from './features/product/product';
import { NotFound } from './features/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'shop/all',
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
