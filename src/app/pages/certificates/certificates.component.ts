import { Component, OnDestroy, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Meta, Title } from '@angular/platform-browser';

import * as fromRoot from '../../store/root.reducer';
import * as AppSelectors from '../../store/app/app.selectors';
import * as AppActions from '../../store/app/app.actions';
import { Certificate } from '../../shared/models/Certificate';
import { AbstractPageComponent } from '../abstract-page.component';
import { TranslateService } from '../../shared/services/translate/translate.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
})
export class CertificatesComponent
  extends AbstractPageComponent
  implements OnInit, OnDestroy {
  public certificates: Certificate[];
  public items: GalleryItem[];
  private certificates$: Subscription;

  constructor(
    protected title: Title,
    protected meta: Meta,
    protected store: Store<fromRoot.State>,
    public gallery: Gallery,
    public lightbox: Lightbox,
    public translateService: TranslateService
  ) {
    super(title, meta, store, translateService);
    this.pageName = 'certificates';
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.certificates$ = this.store
      .select(AppSelectors.selectCertificates)
      .subscribe((certificates) => {
        this.certificates = certificates;
        if (this.certificates !== null) {
          this.items = this.certificates.map(
            (item) => new ImageItem({ src: item.img, thumb: item.imgThumb })
          );
        } else {
          this.store.dispatch(AppActions.fetchCertificates());
        }
      });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();

    if (this.certificates$) {
      this.certificates$.unsubscribe();
    }
  }
}
