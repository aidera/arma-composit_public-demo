import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as fromRoot from '../../../store/root.reducer';
import * as AppSelectors from '../../../store/app/app.selectors';
import * as AppActions from '../../../store/app/app.actions';
import { TranslateService } from '../../services/translate/translate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() theme: 'light' | 'dark' = 'dark';

  public isFullscreenMenuOpen = false;
  private isFullscreenMenuOpen$: Subscription;

  constructor(
    private store: Store<fromRoot.State>,
    public translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.isFullscreenMenuOpen$ = this.store
      .pipe(select(AppSelectors.selectIsFullScreenMenuOpen))
      .subscribe((appState) => {
        this.isFullscreenMenuOpen = appState;
      });
  }

  ngOnDestroy(): void {
    if (this.isFullscreenMenuOpen$) {
      this.isFullscreenMenuOpen$.unsubscribe();
    }
  }

  onFullscreenMenuOpen(): void {
    this.store.dispatch(
      AppActions.setIsFullscreenMenuOpen({
        isOpen: !this.isFullscreenMenuOpen,
      })
    );
  }
}
