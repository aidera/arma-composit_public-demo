import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { TranslateService } from './translate.service';
import * as AppActions from '../../../store/app/app.actions';

describe('TranslateService', () => {
  let service: TranslateService;
  let store: MockStore;
  let storeDispatchSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          initialState: {
            app: {
              locale: 'en',
              translates: {
                test: {
                  ru: 'test ru',
                  ua: 'test ua',
                  en: 'test en',
                },
              },
            },
          },
        }),
      ],
    });
    service = TestBed.inject(TranslateService);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should dispatch setLocale Redux action', () => {
    storeDispatchSpy = spyOn(store, 'dispatch').and.callThrough();

    service.setLocale('en');
    expect(storeDispatchSpy).toHaveBeenCalledWith(
      AppActions.setLocale({ locale: 'en' })
    );
    expect(storeDispatchSpy).toHaveBeenCalledTimes(1);
  });

  it('should display the correct phrase with the current locale', () => {
    service.locale = 'ua';
    expect(service.translate('test')).toBe('test ua');

    service.locale = 'ru';
    expect(service.translate('test')).toBe('test ru');

    service.locale = 'en';
    expect(service.translate('test')).toBe('test en');
  });
});
