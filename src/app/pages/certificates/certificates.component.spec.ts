import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GalleryModule, ImageItem } from 'ng-gallery';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { LightboxModule } from 'ng-gallery/lightbox';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon';

import { CertificatesComponent } from './certificates.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { FullscreenMenuComponent } from '../../shared/components/fullscreen-menu/fullscreen-menu.component';
import { FadeInAndUpMultiplyAnimationDirective } from '../../shared/directives/gsap/fade-in-and-up-multiply-animation.directive';
import { SafeUrlPipe } from '../../shared/pipes/safe-url/safe-url.pipe';

describe('CertificatesComponent', () => {
  let component: CertificatesComponent;
  let fixture: ComponentFixture<CertificatesComponent>;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CertificatesComponent,
        HeaderComponent,
        SidebarComponent,
        FullscreenMenuComponent,
        FadeInAndUpMultiplyAnimationDirective,
        SafeUrlPipe,
      ],
      providers: [
        provideMockStore({
          initialState: {
            app: {
              locale: 'en',
              certificates: null,
            },
          },
        }),
      ],
      imports: [
        RouterTestingModule,
        MatIconModule,
        GalleryModule.withConfig({
          thumbPosition: 'bottom',
          imageSize: 'contain',
        }),
        LightboxModule.withConfig({
          panelClass: 'fullscreen',
        }),
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CertificatesComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display certificates with thumbs', fakeAsync(() => {
    component.certificates = [
      {
        img: 'images/test.png',
        imgThumb: 'images/test-thumb.png',
        description: {
          ru: 'test',
          en: 'test',
          ua: 'test',
        },
      },
      {
        img: 'images/test2.png',
        imgThumb: 'images/test-thumb2.png',
        description: {
          ru: 'test',
          en: 'test',
          ua: 'test',
        },
      },
    ];

    component.items = [
      new ImageItem({ src: 'images/test.png', thumb: 'images/test-thumb.png' }),
      new ImageItem({
        src: 'images/test2.png',
        thumb: 'images/test-thumb2.png',
      }),
    ];

    fixture.detectChanges();

    const firstElement = fixture.debugElement.query(
      By.css('.gallery-element:first-child')
    ).nativeElement;
    expect(firstElement).toBeTruthy();
    expect(firstElement.querySelector('img').getAttribute('src')).toBe(
      'images/test-thumb.png'
    );

    const secondElement = fixture.debugElement.query(
      By.css('.gallery-element:nth-child(2)')
    ).nativeElement;
    expect(secondElement).toBeTruthy();
    expect(secondElement.querySelector('img').getAttribute('src')).toBe(
      'images/test-thumb2.png'
    );
  }));
});
