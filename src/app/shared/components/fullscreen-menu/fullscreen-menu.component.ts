import { Component, OnDestroy, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';

import * as fromRoot from '../../../store/root.reducer';
import * as AppSelectors from '../../../store/app/app.selectors';
import * as AppActions from '../../../store/app/app.actions';
import { TranslateService } from '../../services/translate/translate.service';

@Component({
  selector: 'app-fullscreen-menu',
  templateUrl: './fullscreen-menu.component.html',
  styleUrls: ['./fullscreen-menu.component.scss'],
  animations: [
    trigger('fullscreen-menu', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('250ms ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class FullscreenMenuComponent implements OnInit, OnDestroy {
  public isFullscreenMenuOpen = false;
  private isFullscreenMenuOpen$: Subscription;

  constructor(
    public router: Router,
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

  onPageChange(href: string): void {
    this.store.dispatch(
      AppActions.setIsFullscreenMenuOpen({
        isOpen: false,
      })
    );
    this.router.navigate([href]);
  }
}
