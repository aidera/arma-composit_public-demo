import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

import * as fromRoot from '../../store/root.reducer';
import * as AppActions from '../../store/app/app.actions';
import * as AppSelectors from '../../store/app/app.selectors';
import { Icons } from '../../shared/constants/icons';
import { AbstractPageComponent } from '../abstract-page.component';
import { TranslateService } from '../../shared/services/translate/translate.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../../shared/services/api/api.service';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-submit-an-application',
  templateUrl: './submit-an-application.component.html',
  styleUrls: ['./submit-an-application.component.scss'],
})
export class SubmitAnApplicationComponent
  extends AbstractPageComponent
  implements OnInit, OnDestroy {
  public isFetching = false;
  public serverError = null as string | null;
  public isModalOpen = false;
  public productToOrder = null as Product | null;
  private isFetching$: Subscription;
  private serverError$: Subscription;
  private submitted$: Subscription;
  private productToOrder$: Subscription;
  private localeObs$: Subscription;

  public form: FormGroup;
  public icons = Icons;

  constructor(
    protected title: Title,
    protected meta: Meta,
    protected store: Store<fromRoot.State>,
    public translateService: TranslateService,
    private route: ActivatedRoute,
    private api: ApiService
  ) {
    super(title, meta, store, translateService);
    this.pageName = 'submit-an-application';
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.formInit();

    this.route.queryParams.subscribe((params: Params) => {
      if (params.product) {
        this.productToOrder$ = this.api
          .getProduct(params.product)
          .subscribe((product) => {
            this.productToOrder = product;
            this.form.patchValue({
              comment: `${this.translateService.translate(
                'order-comment-part-1'
              )} "${product.title[this.translateService.locale]}".`,
            });
          });
      }
    });

    this.localeObs$ = this.translateService.localeObs.subscribe((locale) => {
      if (this.productToOrder) {
        this.form.patchValue({
          comment: `${this.translateService.translate(
            'order-comment-part-1'
          )} "${this.productToOrder.title[locale]}".`,
        });
      }
    });

    this.isFetching$ = this.store
      .select(AppSelectors.selectSubmitApplicationIsFetching)
      .subscribe((status) => {
        this.isFetching = status;
      });
    this.serverError$ = this.store
      .select(AppSelectors.selectSubmitApplicationFailMessage)
      .subscribe((message) => {
        this.serverError = message;
      });
    this.submitted$ = this.store
      .select(AppSelectors.selectSubmitApplicationSuccess)
      .subscribe((status) => {
        if (!!status) {
          this.isModalOpen = true;

          this.form.reset();

          Object.keys(this.form.controls).forEach((key) => {
            this.form.get(key).setErrors(null);
            this.form.get(key).markAsUntouched();
          });

          this.store.dispatch(
            AppActions.submitApplicationSuccess({ status: false })
          );
        }
      });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();

    if (this.isFetching$) {
      this.isFetching$.unsubscribe();
    }
    if (this.serverError$) {
      this.serverError$.unsubscribe();
    }
    if (this.submitted$) {
      this.submitted$.unsubscribe();
    }
    if (this.productToOrder$) {
      this.productToOrder$.unsubscribe();
    }
    if (this.localeObs$) {
      this.localeObs$.unsubscribe();
    }
  }

  private formInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      comment: new FormControl(''),
      agreement: new FormControl(true, [Validators.requiredTrue]),
      marketing: new FormControl(true),
    });
  }

  public submit(): void {
    Object.keys(this.form.controls).forEach((field) => {
      const control = this.form.get(field);
      control.markAsTouched({ onlySelf: true });
      control.updateValueAndValidity();
    });

    if (this.form.valid) {
      this.store.dispatch(
        AppActions.submitApplication({
          userName: String(this.form.get('name').value),
          userEmail: String(this.form.get('email').value),
          userPhone: String(this.form.get('phone').value),
          userComment: String(this.form.get('comment').value),
          userMarketingAgree: this.form.get('marketing').value,
        })
      );
    }
  }

  onModalClose(): void {
    this.isModalOpen = false;
  }
}
