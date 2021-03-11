import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Meta, Title } from '@angular/platform-browser';

import * as fromRoot from '../../store/root.reducer';
import * as AppActions from '../../store/app/app.actions';
import * as AppSelectors from '../../store/app/app.selectors';
import { Product } from '../../shared/models/Product';
import { Category } from '../../shared/models/Category';
import { AbstractPageComponent } from '../abstract-page.component';
import { TranslateService } from '../../shared/services/translate/translate.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent
  extends AbstractPageComponent
  implements OnInit, OnDestroy {
  public products: Product[];
  public productsAreFetching = false;
  public categories: Category[];
  public categoriesAreFetching = false;
  public onLoadingItems = ['', '', ''];
  private products$: Subscription;
  private productsAreFetching$: Subscription;
  private categories$: Subscription;
  private categoriesAreFetching$: Subscription;

  constructor(
    protected title: Title,
    protected meta: Meta,
    protected store: Store<fromRoot.State>,
    public translateService: TranslateService
  ) {
    super(title, meta, store, translateService);
    this.pageName = 'products';
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.productsAreFetching$ = this.store
      .select(AppSelectors.selectProductsAreFetching)
      .subscribe((status) => {
        this.productsAreFetching = status;
      });
    this.products$ = this.store
      .select(AppSelectors.selectProducts)
      .subscribe((products) => {
        this.products = products;
      });
    this.categoriesAreFetching$ = this.store
      .select(AppSelectors.selectCategoriesAreFetching)
      .subscribe((status) => {
        this.categoriesAreFetching = status;
      });
    this.categories$ = this.store
      .select(AppSelectors.selectCategories)
      .subscribe((categories) => {
        this.categories = categories;
      });

    if (this.categories === null) {
      this.store.dispatch(AppActions.fetchCategories());
    }
    if (this.products === null) {
      this.store.dispatch(AppActions.fetchProducts());
    }
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();

    if (this.productsAreFetching$) {
      this.productsAreFetching$.unsubscribe();
    }
    if (this.products$) {
      this.products$.unsubscribe();
    }
    if (this.categoriesAreFetching$) {
      this.categoriesAreFetching$.unsubscribe();
    }
    if (this.categories$) {
      this.categories$.unsubscribe();
    }
  }
}
