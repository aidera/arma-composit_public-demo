import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Meta, Title } from '@angular/platform-browser';

import * as fromRoot from '../../store/root.reducer';
import { AbstractPageComponent } from '../abstract-page.component';
import { TranslateService } from '../../shared/services/translate/translate.service';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss'],
})
export class ProductionComponent extends AbstractPageComponent {
  constructor(
    protected title: Title,
    protected meta: Meta,
    protected store: Store<fromRoot.State>,
    public translateService: TranslateService
  ) {
    super(title, meta, store, translateService);
    this.pageName = 'production';
  }
}
