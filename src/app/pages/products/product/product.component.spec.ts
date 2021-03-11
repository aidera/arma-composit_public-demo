import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductComponent } from './product.component';
import { Unit } from '../../../shared/models/Unit';
import { TranslateService } from '../../../shared/services/translate/translate.service';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let store: MockStore;
  let translateService: TranslateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent],
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
  }));

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);
    translateService.locale = 'en';

    fixture.detectChanges();

    component.category = {
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
    };

    component.product = {
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
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
