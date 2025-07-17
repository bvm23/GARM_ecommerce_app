import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'e-img',
  imports: [NgOptimizedImage],
  templateUrl: './img.html',
  styleUrl: './img.css',
})
export class Img {
  imgPath = input.required<string>();
}
