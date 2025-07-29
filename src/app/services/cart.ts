import { computed, inject, Injectable, signal } from '@angular/core';
import {
  type ICartItem,
  type IProduct,
} from '../shared/models/constants.model';
import { Shop } from './shop';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  private shop = inject(Shop);
  private cartEmpty = signal<boolean>(false);
  private cart = signal<ICartItem[]>([]);

  private items = this.shop.products;
  isCartEmpty = this.cartEmpty.asReadonly();
  cartItems = this.cart.asReadonly();

  toggleCartView() {
    this.cartEmpty.update((current) => !current);
  }

  addItem(itemId: number, size: number) {
    //increase count
    const existing = this.cart().find(
      (it) => it.item.id === itemId && it.size === size
    );

    if (existing) {
      existing.count++;
      return;
    }

    //add new item
    const pickedItem = this.items().find((it) => it.id === itemId);
    if (!pickedItem) return;
    const newCartItem: ICartItem = { size: size, item: pickedItem, count: 1 };
    this.cart.update((current) => [...current, newCartItem]);
  }

  removeItem(itemId: number, size?: number) {
    const existing = this.cart().find((it) => it.item.id === itemId);
    if (!existing) return;

    //remove item
    if (existing?.count === 1 || !size) {
      const updatedCart = this.cart().filter((it) => it.item.id !== itemId);
      this.cart.set(updatedCart);
      return;
    }

    //decrease count
    existing.count--;
  }
}
