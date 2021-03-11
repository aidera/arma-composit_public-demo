import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';

import * as fromRoot from '../../../store/root.reducer';
import * as AppSelectors from '../../../store/app/app.selectors';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  @ViewChild('app') appRef: ElementRef;
  isFullscreenMenuOpen = false;
  isFullscreenMenuOpen$: Subscription;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.isFullscreenMenuOpen$ = this.store
      .pipe(select(AppSelectors.selectIsFullScreenMenuOpen))
      .subscribe((status) => {
        this.isFullscreenMenuOpen = status;
        if (this.appRef) {
          if (this.isFullscreenMenuOpen) {
            this.appRef.nativeElement.style = 'overflow: hidden';
          } else {
            this.appRef.nativeElement.style =
              'overflow-y: auto; overflow-x: hidden;';
          }
        }
      });
  }

  ngOnDestroy(): void {
    if (this.isFullscreenMenuOpen$) {
      this.isFullscreenMenuOpen$.unsubscribe();
    }
  }

  app3dEffect(e: MouseEvent): void {
    // if (this.appRef && this.appRef.nativeElement) {
    //   const width = window.innerWidth;
    //   const height = window.innerHeight;
    //   if (width >= 768) {
    //     const mouseX = e.x;
    //     const mouseY = e.y;
    //     const rotateX = (width / 2 - mouseX) / 360;
    //     const rotateY = (height / 2 - mouseY) / 360;
    //     this.appRef.nativeElement.style = `transform: perspective(${width}px) rotateX(${-rotateY}deg) rotateY(${rotateX}deg)`;
    //   } else {
    //     this.appRef.nativeElement.style = `transform: perspective(0) rotateX(0deg) rotateY(0deg)`;
    //   }
    // }
  }
}
