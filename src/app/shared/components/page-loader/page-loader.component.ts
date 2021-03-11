import { Component, OnDestroy, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as fromRoot from '../../../store/root.reducer';
import * as AppSelectors from '../../../store/app/app.selectors';

@Component({
  selector: 'app-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.scss'],
  animations: [
    trigger('page-loader', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate('1000ms ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class PageLoaderComponent implements OnInit, OnDestroy {
  public isLoading = true;
  private isLoading$: Subscription;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.isLoading$ = this.store
      .pipe(select(AppSelectors.selectTranslatesAreFetching))
      .subscribe((status) => {
        this.isLoading = status;
      });
  }

  ngOnDestroy(): void {
    if (this.isLoading$) {
      this.isLoading$.unsubscribe();
    }
  }
}
