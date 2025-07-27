import { Component, inject, input } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RedirectCommand,
  ResolveFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { type IProduct } from '../../shared/models/constants.model';
import { Shop } from '../../services/shop';

@Component({
  selector: 'e-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  id = input.required<string>();
  item = input.required<IProduct>();
}

export const resolveProductItem: ResolveFn<IProduct> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const shopService = inject(Shop);
  const router = inject(Router);
  const itemId = activatedRoute.paramMap.get('id') || '';

  const product = shopService
    .products()
    .find((item) => item.id === parseInt(itemId));

  return product || new RedirectCommand(router.parseUrl('/item-not-found'));
};
