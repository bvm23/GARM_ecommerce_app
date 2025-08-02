import { Component, computed, inject, input } from '@angular/core';
import { Shop as ShopService } from '../../services/shop';
import { Img } from '../../shared/components/img/img';
import { RouterLink } from '@angular/router';
import { type IProduct } from '../../shared/models/constants.model';

@Component({
  selector: 'e-shop',
  imports: [Img, RouterLink],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {
  private shopService = inject(ShopService);

  type = input<string>();

  itemsOfSelectedType = computed(() =>
    this.type()
      ? (item: IProduct) => item.type === this.type()
      : (item: IProduct) => item
  );

  products = computed(() =>
    this.shopService.products().filter(this.itemsOfSelectedType())
  );
}
