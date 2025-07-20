import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Cart as CartService } from './services/cart';
import { Cart } from './components/cart/cart';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Cart],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private cartService = inject(CartService);

  isCartEmpty = this.cartService.isCartEmpty;
}
