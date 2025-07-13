import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'e-nav',
  imports: [NgClass],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  protected isNavOpen = signal<boolean | undefined>(false);

  protected openNav() {
    this.isNavOpen.update((current) => !current);
  }
}
