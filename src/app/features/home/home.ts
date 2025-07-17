import { Component } from '@angular/core';
import { Icon } from '../../shared/components/icon/icon';
import { CornerRightUp } from 'lucide-angular';
import { Img } from '../../shared/components/img/img';

@Component({
  selector: 'e-home',
  imports: [Icon, Img],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly upArrowIcon = CornerRightUp;
}
