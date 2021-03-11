import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';

import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { Unit } from '../../shared/models/Unit';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { FullscreenMenuComponent } from '../../shared/components/fullscreen-menu/fullscreen-menu.component';
import { SafeUrlPipe } from '../../shared/pipes/safe-url/safe-url.pipe';
import { FadeInAndUpMultiplyAnimationDirective } from '../../shared/directives/gsap/fade-in-and-up-multiply-animation.directive';
import { FadeInAndUpAnimationDirective } from '../../shared/directives/gsap/fade-in-and-up-animation.directive';
import { FadeInAnimationDirective } from '../../shared/directives/gsap/fade-in-animation.directive';
import { ProductFilterPipe } from '../../shared/pipes/product-filter/product-filter.pipe';
import { TranslateService } from '../../shared/services/translate/translate.service';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let store: MockStore;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductsComponent,
        ProductComponent,
        HeaderComponent,
        SidebarComponent,
        FullscreenMenuComponent,
        SafeUrlPipe,
        FadeInAndUpMultiplyAnimationDirective,
        FadeInAndUpAnimationDirective,
        FadeInAnimationDirective,
        ProductFilterPipe,
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
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);
    translateService.locale = 'en';

    fixture.detectChanges();

    component.categories = [
      {
        id: 'category1',
        title: {
          ru: 'Ru test category 1',
          en: 'En test category 1',
          ua: 'Ua test category 1',
        },
        image: '',
        description: {
          ru: 'Ru description',
          en: 'En description',
          ua: 'Ua description',
        },
      },
      {
        id: 'category2',
        title: {
          ru: 'Ru test category 2',
          en: 'En test category 2',
          ua: 'Ua test category 2',
        },
        image: '',
        description: {
          ru: 'Ru description',
          en: 'En description',
          ua: 'Ua description',
        },
      },
    ];

    component.products = [
      {
        id: '0',
        title: {
          ru: 'product 1',
          en: 'product 1',
          ua: 'product 1',
        },
        description: {
          ru: 'product description 1',
          en: 'product description 1',
          ua: 'product description 1',
        },
        categoryId: 'category1',
        image: 'test.png',
        parameters: {
          price: 200,
          unitToPrice: Unit.SquareMeter,
          withNDS: true,
        },
      },
      {
        id: '1',
        title: {
          ru: 'product 2',
          en: 'product 2',
          ua: 'product 2',
        },
        description: {
          ru: 'product description 2',
          en: 'product description 2',
          ua: 'product description 2',
        },
        categoryId: 'category2',
        image: 'test.png',
        parameters: {
          price: 200,
          unitToPrice: Unit.SquareMeter,
          withNDS: true,
        },
      },
    ];

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display categories', () => {
    expect(fixture.nativeElement.innerHTML).toContain('En test category 1');
    expect(fixture.nativeElement.innerHTML).toContain('En test category 2');
  });

  it('should display products', () => {
    const childDebugElement = fixture.debugElement.query(
      By.directive(ProductComponent)
    );
    expect(childDebugElement).toBeTruthy();
  });
});
