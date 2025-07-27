import { Component, inject, input, OnInit } from '@angular/core';
import { PRODUCTS } from '../../shared/utils/constants';
import { Shop as ShopService } from '../../services/shop';
import { Img } from '../../shared/components/img/img';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'e-shop',
  imports: [Img, RouterLink],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {
  private shopService = inject(ShopService);

  products = this.shopService.products;
}
