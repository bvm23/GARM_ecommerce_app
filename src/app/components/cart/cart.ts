import { Component, computed, inject } from '@angular/core';
import { X } from 'lucide-angular';
import { Icon } from '../../shared/components/icon/icon';
import { CartItem } from './cart-item/cart-item';
import { Cart as CartService } from '../../services/cart';
import { NgClass } from '@angular/common';

@Component({
  selector: 'e-cart',
  imports: [Icon, CartItem, NgClass],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  private cartService = inject(CartService);

  readonly closeIcon = X;
  readonly cartItems = this.cartService.cartItems;
  readonly cartItemsCount = this.cartService.cartItemsCount;
  readonly cartTotalAmount = this.cartService.cartTotalAmount;

  closeCart() {
    this.cartService.toggleCartView();
  }
}
