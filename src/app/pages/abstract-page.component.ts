import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';

import * as fromRoot from '../store/root.reducer';
import * as AppSelectors from '../store/app/app.selectors';
import * as AppActions from '../store/app/app.actions';
import { Page } from '../shared/models/Page';
import { TranslateService } from '../shared/services/translate/translate.service';

@Component({
  template: '',
})
export abstract class AbstractPageComponent implements OnInit, OnDestroy {
  public page: Page | null;
  public pageIsFetching: boolean;
  protected locale$: Subscription;
  protected translates$: Subscription;
  protected pageName: string;
  protected page$: Subscription;
  protected pageIsFetching$: Subscription;

  protected constructor(
    protected title: Title,
    protected meta: Meta,
    protected store: Store<fromRoot.State>,
    public translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.locale$ = this.store
      .select(AppSelectors.selectLocale)
      .subscribe(() => {
        this.setSeo();
      });
    this.translates$ = this.store
      .select(AppSelectors.selectTranslates)
      .subscribe(() => {
        this.setSeo();
      });
    this.page$ = this.store
      .select(AppSelectors.selectPages)
      .subscribe((pages) => {
        this.page = pages && pages[this.pageName] ? pages[this.pageName] : null;

        this.setSeo();
      });
    this.pageIsFetching$ = this.store
      .select(AppSelectors.selectPagesIsFetching)
      .subscribe((status) => {
        this.pageIsFetching = status;
      });
    if (this.page === null) {
      this.store.dispatch(AppActions.fetchPages());
    }
  }

  ngOnDestroy(): void {
    if (this.locale$) {
      this.locale$.unsubscribe();
    }
    if (this.translates$) {
      this.translates$.unsubscribe();
    }
    if (this.page$) {
      this.page$.unsubscribe();
    }
    if (this.pageIsFetching$) {
      this.pageIsFetching$.unsubscribe();
    }
  }

  private setSeo(): void {
    if (this.page && this.page.seo) {
      this.title.setTitle(this.page.seo.title[this.translateService.locale]);
      this.meta.addTags([
        {
          name: 'keywords',
          content: this.page.seo.keywords[this.translateService.locale],
        },
        {
          name: 'description',
          content: this.page.seo.description[this.translateService.locale],
        },
        {
          name: 'og:description',
          content: this.page.seo.description[this.translateService.locale],
        },
        {
          name: 'og:title',
          content: this.page.seo.title[this.translateService.locale],
        },
      ]);
    }
  }
}
