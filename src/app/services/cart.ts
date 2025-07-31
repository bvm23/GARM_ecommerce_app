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

  cartItemsCount = computed(() =>
    this.cart().reduce(
      (totalCount, cartItem) => (totalCount += cartItem.count),
      0
    )
  );

  toggleCartView() {
    this.cartEmpty.update((current) => !current);
  }

  addItem(itemId: number, size: number): void {
    const pickedItem = this.items().find((it) => it.id === itemId);

    if (!pickedItem) {
      console.warn(`product with id: ${itemId} not found`);
      return;
    }

    this.cart.update((current) => {
      const existingIndex = current.findIndex(
        (it) => it.item.id === itemId && it.size === size
      );

      //increase count
      if (existingIndex !== -1) {
        return current.map((it, idx) =>
          idx === existingIndex ? { ...it, count: it.count + 1 } : it
        );
      } else {
        //add new item
        const newCartItem: ICartItem = {
          size,
          item: pickedItem,
          count: 1,
        };
        return [...current, newCartItem];
      }
    });
  }

  removeItem(
    itemId: number,
    size: number,
    type: 'complete' | 'partial' = 'partial'
  ): void {
    const existingIndex = this.cart().findIndex(
      (it) => it.item.id === itemId && it.size === size
    );

    if (existingIndex === -1) {
      console.warn(
        `product with id: ${itemId} and size: ${size} not exist in cart`
      );
      return;
    }

    this.cart.update((current) => {
      const item = current[existingIndex];
      return item?.count <= 1 || type === 'complete'
        ? current.filter((it, idx) => idx !== existingIndex) // remove
        : current.map(
            (it, idx) =>
              idx === existingIndex ? { ...it, count: it.count - 1 } : it // decrement count
          );
    });
  }
}
