import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FullscreenMenuComponent } from './fullscreen-menu.component';
import { TranslateService } from '../../services/translate/translate.service';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as AppActions from '../../../store/app/app.actions';

describe('FullscreenMenuComponent', () => {
  let component: FullscreenMenuComponent;
  let fixture: ComponentFixture<FullscreenMenuComponent>;
  let store: MockStore;
  let storeDispatchSpy: jasmine.Spy;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullscreenMenuComponent],
      providers: [
        provideMockStore({
          initialState: {
            app: {
              locale: 'en',
              isFullscreenMenuOpen: true,
            },
          },
        }),
      ],
      imports: [RouterTestingModule, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FullscreenMenuComponent);
    component = fixture.debugElement.componentInstance;
    translateService = TestBed.inject(TranslateService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch ngrx action to close itself', () => {
    store = TestBed.inject(MockStore);
    storeDispatchSpy = spyOn(store, 'dispatch').and.callThrough();

    component.isFullscreenMenuOpen = true;
    component.onFullscreenMenuOpen();
    fixture.detectChanges();

    expect(storeDispatchSpy).toHaveBeenCalledTimes(1);
    expect(storeDispatchSpy).toHaveBeenCalledWith(
      AppActions.setIsFullscreenMenuOpen({
        isOpen: false,
      })
    );
  });

  it('should call translate service locale set', () => {
    const translateServiceSpy = spyOn(translateService, 'setLocale');

    component.isFullscreenMenuOpen = true;
    fixture.detectChanges();

    const link = fixture.debugElement.query(By.css('.language-controller a'))
      .nativeElement;

    link.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();

    expect(translateServiceSpy).toHaveBeenCalledTimes(1);
  });
});
