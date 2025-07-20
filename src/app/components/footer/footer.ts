import { Component } from '@angular/core';

@Component({
  selector: 'e-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly currentYear = new Date().getFullYear();
}
