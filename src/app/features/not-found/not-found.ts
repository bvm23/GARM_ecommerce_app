import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Img } from '../../shared/components/img/img';

@Component({
  selector: 'e-not-found',
  imports: [RouterLink, Img],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {}
