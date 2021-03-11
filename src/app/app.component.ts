import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as fromRoot from './store/root.reducer';
import * as AppActions from './store/app/app.actions';
import { selectTranslatesAreFetching } from './store/app/app.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  store$: Subscription;
  translatesAreFetching = true;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.store.dispatch(AppActions.fetchTranslates());
    this.store$ = this.store
      .select(selectTranslatesAreFetching)
      .subscribe((appState) => {
        this.translatesAreFetching = appState;
      });
  }

  ngOnDestroy(): void {
    if (this.store$) {
      this.store$.unsubscribe();
    }
  }
}
