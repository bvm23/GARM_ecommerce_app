import { Component, effect, input } from '@angular/core';

@Component({
  selector: 'e-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  id = input<string>();
}
