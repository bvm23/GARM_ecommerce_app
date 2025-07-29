import { Component, inject, input } from '@angular/core';
import { Img } from '../../../shared/components/img/img';
import { Icon } from '../../../shared/components/icon/icon';
import { Plus, Minus, X } from 'lucide-angular';
import { type ICartItem } from '../../../shared/models/constants.model';
import { Cart as CartService } from '../../../services/cart';

@Component({
  selector: 'e-cart-item',
  imports: [Img, Icon],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css',
})
export class CartItem {
  private cartService = inject(CartService);
  readonly plusIcon = Plus;
  readonly minusIcon = Minus;
  readonly removeIcon = X;

  item = input.required<ICartItem>();

  onPlusButtonClick() {
    this.cartService.addItem(this.item().item.id, this.item().size);
  }

  onMinusButtonClick() {
    this.cartService.removeItem(this.item().item.id, this.item().size);
  }

  onRemoveButtonClick() {
    this.cartService.removeItem(this.item().item.id);
  }
}
