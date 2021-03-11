import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../store/root.reducer';
import * as AppSelectors from '../../../store/app/app.selectors';
import * as AppActions from '../../../store/app/app.actions';
import { Locale } from '../../models/Locale';
import { Translate } from '../../models/Translate';

@Injectable({
  providedIn: 'root',
})
export class TranslateService implements OnDestroy {
  public locale: Locale;
  public translates: { [key: string]: Translate };
  public localeObs: Observable<Locale>;
  protected locale$: Subscription;
  protected translates$: Subscription;

  protected constructor(protected store: Store<fromRoot.State>) {
    this.localeObs = this.store.select(AppSelectors.selectLocale);
    this.locale$ = this.store
      .select(AppSelectors.selectLocale)
      .subscribe((locale) => {
        this.locale = locale;
      });
    this.translates$ = this.store
      .select(AppSelectors.selectTranslates)
      .subscribe((translates) => {
        this.translates = translates;
      });
  }

  ngOnDestroy(): void {
    if (this.locale$) {
      this.locale$.unsubscribe();
    }
    if (this.translates$) {
      this.translates$.unsubscribe();
    }
  }

  translate(key: string): string {
    return this.translates && this.translates[key]
      ? this.translates[key][this.locale]
      : '';
  }

  setLocale(locale: Locale): void {
    this.store.dispatch(AppActions.setLocale({ locale }));
  }
}
