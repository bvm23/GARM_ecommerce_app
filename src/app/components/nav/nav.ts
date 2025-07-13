import { NgClass } from '@angular/common';
import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { Icon } from '../../shared/components/icon/icon';
import { Search, XCircle, SearchIcon } from 'lucide-angular';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounce, debounceTime } from 'rxjs';

@Component({
  selector: 'e-nav',
  imports: [NgClass, Icon, ReactiveFormsModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav implements OnInit {
  private destroyRef = inject(DestroyRef);

  readonly searchIcon = Search;
  readonly clearIcon = XCircle;

  protected searchInput$ = new FormControl<string>('');
  protected isNavOpen = signal<boolean | undefined>(false);
  protected isSearchStart = signal<boolean | undefined>(false);

  protected toggleNav() {
    this.isNavOpen.update((current) => !current);
  }

  protected toggleSearch() {
    this.isSearchStart.update((current) => !current);
  }
  ngOnInit() {
    const textInputSubscription = this.searchInput$.valueChanges
      .pipe(debounceTime(500))
      .subscribe({ next: (input) => console.log(input) });

    this.destroyRef.onDestroy(() => textInputSubscription.unsubscribe());
  }
}
