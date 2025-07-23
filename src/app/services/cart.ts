import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  private cartEmpty = signal<boolean>(false);

  isCartEmpty = this.cartEmpty.asReadonly();

  toggleCartView() {
    this.cartEmpty.update((current) => !current);
  }
}
