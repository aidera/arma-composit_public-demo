import {
  AfterViewInit,
  Component,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Meta, Title } from '@angular/platform-browser';

import * as fromRoot from '../../store/root.reducer';
import { AbstractPageComponent } from '../abstract-page.component';
import { TranslateService } from '../../shared/services/translate/translate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent
  extends AbstractPageComponent
  implements AfterViewInit {
  @ViewChild('bgImage') bgImageRef: ElementRef;
  private currentBgImageIndex: number;

  constructor(
    protected title: Title,
    protected meta: Meta,
    protected store: Store<fromRoot.State>,
    public translateService: TranslateService
  ) {
    super(title, meta, store, translateService);
    this.pageName = 'home';
  }

  ngAfterViewInit(): void {
    this.bgImageSlider();
  }

  private bgImageSlider(): void {
    if (this.bgImageRef && this.bgImageRef.nativeElement) {
      const bgImageEl = this.bgImageRef.nativeElement;
      const images = bgImageEl.querySelectorAll('img');

      this.currentBgImageIndex = 0;

      setInterval(() => {
        if (this.currentBgImageIndex >= images.length - 1) {
          this.currentBgImageIndex = 0;
        } else {
          this.currentBgImageIndex = this.currentBgImageIndex + 1;
        }
        images.forEach((image, i) => {
          if (i === this.currentBgImageIndex) {
            image.classList.add('active');
          } else {
            image.classList.remove('active');
          }
        });
      }, 5500);
    }
  }
}
