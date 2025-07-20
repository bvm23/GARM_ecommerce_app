import { MENUDATA } from './../../shared/utils/constants';
import { NgClass } from '@angular/common';
import {
  Component,
  computed,
  DestroyRef,
  ElementRef,
  inject,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import { Icon } from '../../shared/components/icon/icon';
import { Search, XCircle } from 'lucide-angular';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { type IMenuData } from '../../shared/models/constants.model';
import { Cart as CartService } from '../../services/cart';

@Component({
  selector: 'e-nav',
  imports: [NgClass, Icon, ReactiveFormsModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav implements OnInit {
  private destroyRef = inject(DestroyRef);
  private cartService = inject(CartService);

  readonly searchIcon = Search;
  readonly clearIcon = XCircle;
  readonly MENUDATA: IMenuData = MENUDATA;

  searchInput$ = new FormControl<string>('');
  isNavOpen = signal<boolean>(false);
  isSearchStart = signal<boolean>(false);
  selectedMenu = signal<string | undefined>('');

  submenu = computed(
    () =>
      Object.entries(MENUDATA).find(
        (menu) => menu[0] === this.selectedMenu()
      )?.[1]
  );

  ngOnInit() {
    const textInputSubscription = this.searchInput$.valueChanges
      .pipe(debounceTime(500))
      .subscribe({ next: (input) => console.log(input) });

    this.destroyRef.onDestroy(() => textInputSubscription.unsubscribe());
  }

  toggleNav() {
    this.isNavOpen.update((current) => !current);
  }

  toggleSearch() {
    this.isSearchStart.update((current) => !current);
  }

  toggleCart() {
    this.cartService.toggleCartView();
  }
}
