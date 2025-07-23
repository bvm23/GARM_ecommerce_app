import { Component, inject } from '@angular/core';
import { X } from 'lucide-angular';
import { Icon } from '../../shared/components/icon/icon';
import { CartItem } from './cart-item/cart-item';
import { Cart as CartService } from '../../services/cart';

@Component({
  selector: 'e-cart',
  imports: [Icon],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  private cartService = inject(CartService);

  readonly closeIcon = X;

  closeCart() {
    this.cartService.toggleCartView();
  }
}
