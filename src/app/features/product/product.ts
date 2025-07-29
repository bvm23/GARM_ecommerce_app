import { Component, inject, input, signal } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RedirectCommand,
  ResolveFn,
  Router,
  RouterLink,
  RouterStateSnapshot,
} from '@angular/router';
import { type IProduct } from '../../shared/models/constants.model';
import { Shop } from '../../services/shop';
import { Img } from '../../shared/components/img/img';
import { ArrowLeft, Minus, PlusIcon } from 'lucide-angular';
import { Icon } from '../../shared/components/icon/icon';
import { NgClass } from '@angular/common';
import { Cart as CartService } from '../../services/cart';

@Component({
  selector: 'e-product',
  imports: [Img, Icon, RouterLink, NgClass],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  private cartService = inject(CartService);

  readonly leftArrowIcon = ArrowLeft;
  readonly plusIcon = PlusIcon;
  readonly minusIcon = Minus;

  id = input.required<string>();
  item = input.required<IProduct>();
  selectedSize = signal<number>(28);

  onAddToCart() {
    this.cartService.addItem(this.item().id, this.selectedSize());
    this.cartService.toggleCartView();
  }

  changeSize(size: number) {
    this.selectedSize.set(size);
  }
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
