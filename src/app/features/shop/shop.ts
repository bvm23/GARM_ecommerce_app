import { Component } from '@angular/core';
import { PRODUCTS } from '../../shared/utils/constants';
import { Img } from '../../shared/components/img/img';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'e-shop',
  imports: [Img, RouterLink],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {
  readonly PRODUCTS = PRODUCTS;
}
