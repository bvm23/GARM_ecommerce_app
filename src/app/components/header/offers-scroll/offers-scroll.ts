import { Component } from '@angular/core';

@Component({
  selector: 'e-offers-scroll',
  imports: [],
  templateUrl: './offers-scroll.html',
  styleUrl: './offers-scroll.css',
})
export class OffersScroll {
  offers: string[] = [
    'save 10% with code save10',
    'free shipping on orders over $150',
    'save 10% with code save10',
    'free shipping on orders over $150',
    'save 10% with code save10',
    'free shipping on orders over $150',
  ];
}
