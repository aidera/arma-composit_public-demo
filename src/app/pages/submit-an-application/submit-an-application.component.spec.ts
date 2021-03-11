import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import * as AppActions from '../../store/app/app.actions';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubmitAnApplicationComponent } from './submit-an-application.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { FullscreenMenuComponent } from '../../shared/components/fullscreen-menu/fullscreen-menu.component';
import { SafeUrlPipe } from '../../shared/pipes/safe-url/safe-url.pipe';
import { FadeInAndUpMultiplyAnimationDirective } from '../../shared/directives/gsap/fade-in-and-up-multiply-animation.directive';
import { CheckboxComponent } from '../../shared/components/form-controls/checkbox/checkbox.component';
import { TextInputComponent } from '../../shared/components/form-controls/text-input/text-input.component';
import { TextareaComponent } from '../../shared/components/form-controls/textarea/textarea.component';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';

describe('SubmitAnApplicationComponent', () => {
  let component: SubmitAnApplicationComponent;
  let fixture: ComponentFixture<SubmitAnApplicationComponent>;
  let store: MockStore;
  let storeDispatchSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SubmitAnApplicationComponent,
        HeaderComponent,
        SidebarComponent,
        FullscreenMenuComponent,
        SafeUrlPipe,
        FadeInAndUpMultiplyAnimationDirective,
        TextInputComponent,
        TextareaComponent,
        CheckboxComponent,
        ModalComponent,
      ],
      providers: [
        provideMockStore({
          initialState: {
            app: {
              locale: 'en',
              translates: {
                test: {
                  ru: 'test',
                  en: 'test',
                  ua: 'test',
                },
              },
              pages: {
                'submit-an-application': {
                  seo: {
                    title: 'test',
                    description: 'test',
                    keywords: 'test',
                  },
                },
              },
            },
          },
        }),
      ],
      imports: [
        RouterTestingModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SubmitAnApplicationComponent);
    component = fixture.componentInstance;

    component.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      comment: new FormControl(''),
      agreement: new FormControl(true, [Validators.requiredTrue]),
      marketing: new FormControl(true),
    });

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display a validation required error for the name field', () => {
    component.form.controls.name.setValue('');
    component.form.controls.name.markAsTouched();
    fixture.detectChanges();
    expect(component.form.controls.name.errors.required).toBeTruthy();
  });

  it('should display a validation required error for the email field', () => {
    component.form.controls.email.setValue('');
    component.form.controls.email.markAsTouched();
    fixture.detectChanges();
    expect(component.form.controls.email.errors.required).toBeTruthy();
  });

  it('should display a validation email error for the email field', () => {
    component.form.controls.email.setValue('test');
    component.form.controls.email.markAsTouched();
    fixture.detectChanges();
    expect(component.form.controls.email.errors.email).toBeTruthy();
  });

  it('should display a validation required error for the phone field', () => {
    component.form.controls.phone.setValue('');
    component.form.controls.phone.markAsTouched();
    fixture.detectChanges();
    expect(component.form.controls.phone.errors.required).toBeTruthy();
  });

  it('should display a validation required error for the agreement field', () => {
    component.form.controls.agreement.setValue(false);
    component.form.controls.agreement.markAsTouched();
    fixture.detectChanges();
    expect(component.form.controls.agreement.errors.required).toBeTruthy();
  });

  it('should call submit by button click', () => {
    const spy = spyOn(component, 'submit');

    component.form.controls.name.setValue('test name');
    component.form.controls.phone.setValue('987987987');
    component.form.controls.email.setValue('test@test.test');
    component.form.controls.agreement.setValue(true);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button[type="submit"]');
    button.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should dispatch an action when submit is called', () => {
    store = TestBed.inject(MockStore);
    storeDispatchSpy = spyOn(store, 'dispatch').and.callThrough();

    component.form.controls.name.setValue('test name');
    component.form.controls.phone.setValue('987987987');
    component.form.controls.email.setValue('test@test.test');
    component.form.controls.agreement.setValue(true);
    fixture.detectChanges();

    component.submit();
    fixture.detectChanges();

    expect(storeDispatchSpy).toHaveBeenCalledTimes(1);
    expect(storeDispatchSpy).toHaveBeenCalledWith(
      AppActions.submitApplication({
        userName: 'test name',
        userEmail: 'test@test.test',
        userPhone: '987987987',
        userComment: '',
        userMarketingAgree: true,
      })
    );
  });

  it('should display and hide modal', () => {
    component.isModalOpen = false;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.modal')).toBeFalsy();

    component.isModalOpen = true;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.modal')).toBeTruthy();
  });
});
