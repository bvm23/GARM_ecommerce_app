import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Shop } from './features/shop/shop';
import { Product } from './features/product/product';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'shop/all', component: Shop },
  { path: 'item/:id', component: Product },
];
