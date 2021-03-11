import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';
import { FullscreenMenuComponent } from '../fullscreen-menu/fullscreen-menu.component';
import { TranslateService } from '../../services/translate/translate.service';
import * as AppActions from '../../../store/app/app.actions';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store: MockStore;
  let storeDispatchSpy: jasmine.Spy;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, FullscreenMenuComponent],
      providers: [
        provideMockStore({
          initialState: {
            app: {
              locale: 'en',
              isFullscreenMenuOpen: false,
            },
          },
        }),
      ],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.debugElement.componentInstance;
    translateService = TestBed.inject(TranslateService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call translate service locale set', () => {
    const translateServiceSpy = spyOn(translateService, 'setLocale');
    const link = fixture.debugElement.query(By.css('.language-controller a'))
      .nativeElement;

    link.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();

    expect(translateServiceSpy).toHaveBeenCalledTimes(1);
  });

  it('should dispatch ngrx action to open menu', () => {
    store = TestBed.inject(MockStore);
    storeDispatchSpy = spyOn(store, 'dispatch').and.callThrough();

    component.onFullscreenMenuOpen();
    fixture.detectChanges();

    expect(storeDispatchSpy).toHaveBeenCalledTimes(1);
    expect(storeDispatchSpy).toHaveBeenCalledWith(
      AppActions.setIsFullscreenMenuOpen({
        isOpen: true,
      })
    );
  });
});
