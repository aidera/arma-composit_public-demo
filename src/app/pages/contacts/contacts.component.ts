import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Meta, Title } from '@angular/platform-browser';

import * as fromRoot from '../../store/root.reducer';
import * as AppSelectors from '../../store/app/app.selectors';
import * as AppActions from '../../store/app/app.actions';
import { MainInfo } from '../../shared/models/MainInfo';
import { AbstractPageComponent } from '../abstract-page.component';
import { TranslateService } from '../../shared/services/translate/translate.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent
  extends AbstractPageComponent
  implements OnInit, OnDestroy {
  public mainInfo: MainInfo;
  private mainInfo$: Subscription;

  constructor(
    protected title: Title,
    protected meta: Meta,
    protected store: Store<fromRoot.State>,
    public translateService: TranslateService
  ) {
    super(title, meta, store, translateService);
    this.pageName = 'contacts';
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.mainInfo$ = this.store
      .select(AppSelectors.selectMainInfo)
      .subscribe((mainInfo) => {
        this.mainInfo = mainInfo;
      });

    if (this.mainInfo === null) {
      this.store.dispatch(AppActions.fetchMainInfo());
    }
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();

    if (this.mainInfo$) {
      this.mainInfo$.unsubscribe();
    }
  }
}
