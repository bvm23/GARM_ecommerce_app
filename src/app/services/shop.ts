import { Injectable, signal } from '@angular/core';
import { IProduct } from '../shared/models/constants.model';
import { PRODUCTS } from '../shared/utils/constants';

@Injectable({
  providedIn: 'root',
})
export class Shop {
  private allProducts = signal<IProduct[]>(PRODUCTS);

  products = this.allProducts.asReadonly();
}
