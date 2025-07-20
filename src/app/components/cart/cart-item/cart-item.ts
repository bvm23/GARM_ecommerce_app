import { Component } from '@angular/core';
import { Img } from '../../../shared/components/img/img';
import { Icon } from '../../../shared/components/icon/icon';
import { Plus, Minus, X } from 'lucide-angular';

@Component({
  selector: 'e-cart-item',
  imports: [Img, Icon],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css',
})
export class CartItem {
  readonly plusIcon = Plus;
  readonly minusIcon = Minus;
  readonly closeIcon = X;
}
