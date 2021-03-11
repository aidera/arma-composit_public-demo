import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { ProductionComponent } from './production.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { FullscreenMenuComponent } from '../../shared/components/fullscreen-menu/fullscreen-menu.component';
import { SafeUrlPipe } from '../../shared/pipes/safe-url/safe-url.pipe';
import { FadeInAndUpMultiplyAnimationDirective } from '../../shared/directives/gsap/fade-in-and-up-multiply-animation.directive';
import { FadeInAndUpAnimationDirective } from '../../shared/directives/gsap/fade-in-and-up-animation.directive';
import { TranslateService } from '../../shared/services/translate/translate.service';

describe('ProductionComponent', () => {
  let component: ProductionComponent;
  let fixture: ComponentFixture<ProductionComponent>;
  let store: MockStore;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductionComponent,
        HeaderComponent,
        SidebarComponent,
        FullscreenMenuComponent,
        SafeUrlPipe,
        FadeInAndUpMultiplyAnimationDirective,
        FadeInAndUpAnimationDirective,
      ],
      providers: [
        provideMockStore({
          initialState: {
            app: {
              locale: 'en',
            },
          },
        }),
      ],
      imports: [RouterTestingModule],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ProductionComponent);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);
    translateService.locale = 'en';

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display content', () => {
    component.page = {
      seo: {
        title: {
          ru: 'test ru title',
          en: 'test en title',
          ua: 'test ua title',
        },
        description: {
          ru: 'test ru description',
          en: 'test en description',
          ua: 'test ua description',
        },
        keywords: {
          ru: 'test ru keywords',
          en: 'test en keywords',
          ua: 'test ua keywords',
        },
      },
      content: {
        0: {
          text: {
            ru: 'Test ru text',
            en: 'Test en text',
            ua: 'Test ua text',
          },
        },
        1: {
          img: {
            path: 'test.png',
            description: {
              ru: 'Test ru img',
              en: 'Test en img',
              ua: 'Test ua img',
            },
          },
        },
      },
    };

    fixture.detectChanges();

    const contentContainer = fixture.nativeElement.querySelector(
      '.simple-text-content'
    );

    expect(contentContainer.innerHTML).toContain('Test en text');
    expect(contentContainer.innerHTML).toContain('Test en img');
    expect(
      contentContainer.querySelector('img[alt="Test en img"]')
    ).toBeTruthy();
  });
});
