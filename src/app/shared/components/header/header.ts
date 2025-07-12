import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { OffersScroll } from './offers-scroll/offers-scroll';
import { catchError, interval, map, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { type LocationResponse } from '../../models/api.model';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'e-header',
  imports: [OffersScroll],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  private destroyRef = inject(DestroyRef);
  private http = inject(HttpClient);

  private timer$ = interval(1000);
  protected time = signal<string | undefined>(this.getTime());
  protected location = signal<string | undefined>('loading..');

  private getTime() {
    return new Date()
      .toLocaleTimeString()
      .replace(/am/gi, '')
      .replace(/pm/gi, '')
      .trim();
  }

  private getLocation() {
    return this.http
      .get<LocationResponse>(environment.LOC_URL, {
        observe: 'response',
      })
      .pipe(
        map((response) => response.body),
        catchError((err) => throwError(() => new Error(err)))
      );
  }

  ngOnInit() {
    const timerSubscription = this.timer$.subscribe({
      next: () => this.time.set(this.getTime()),
    });

    this.getLocation().subscribe({
      next: (locData) => {
        this.location.set(`${locData?.city}, ${locData?.countryCode}`);
      },
      error: () => this.location.set(new Date().toDateString()), // show date incase location not found,
    });

    this.destroyRef.onDestroy(() => timerSubscription.unsubscribe());
  }
}
