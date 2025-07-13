import { Component, computed, input } from '@angular/core';
import {
  LucideAngularModule,
  AArrowDownIcon,
  LucideIconData,
} from 'lucide-angular';

@Component({
  selector: 'e-icon',
  imports: [LucideAngularModule],
  templateUrl: './icon.html',
  styleUrl: './icon.css',
})
export class Icon {
  img = input.required<LucideIconData>();
  size = input<number>(24);
  color = input<string>();
  strokeWidth = input<number>(2);
}
