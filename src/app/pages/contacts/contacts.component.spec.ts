import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsComponent } from './contacts.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { FullscreenMenuComponent } from '../../shared/components/fullscreen-menu/fullscreen-menu.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon';
import { SafeUrlPipe } from '../../shared/pipes/safe-url/safe-url.pipe';
import { FadeInAndUpMultiplyAnimationDirective } from '../../shared/directives/gsap/fade-in-and-up-multiply-animation.directive';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactsComponent,
        HeaderComponent,
        SidebarComponent,
        FullscreenMenuComponent,
        SafeUrlPipe,
        FadeInAndUpMultiplyAnimationDirective,
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
      imports: [RouterTestingModule, MatIconModule],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    component.mainInfo = {
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270.1533831063493!2d30.42803440107744!3d50.454011996624544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDI3JzE0LjQiTiAzMMKwMjUnNDQuMSJF!5e0!3m2!1sru!2sua!4v1602921031468!5m2!1sru!2sua',
      emails: ['test@test.test', 'test2@test.test'],
      phones: ['+38 089 999 99 99', '+38 089 777 77 77'],
      addresses: ['test address 1', 'test address 3'],
      legalName: 'test company name',
    };

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display phone numbers with autocall', () => {
    const firstNumber = fixture.nativeElement.querySelector(
      'a[href="tel:+38 089 999 99 99"]'
    );
    expect(firstNumber).toBeTruthy();
    expect(firstNumber.innerHTML).toBe('+38 089 999 99 99');

    const secondNumber = fixture.nativeElement.querySelector(
      'a[href="tel:+38 089 777 77 77"]'
    );
    expect(secondNumber).toBeTruthy();
    expect(secondNumber.innerHTML).toBe('+38 089 777 77 77');
  });

  it('should display email with automail', () => {
    const firstEmail = fixture.nativeElement.querySelector(
      'a[href="mailto:test@test.test"]'
    );
    expect(firstEmail).toBeTruthy();
    expect(firstEmail.innerHTML).toBe('test@test.test');

    const secondEmail = fixture.nativeElement.querySelector(
      'a[href="mailto:test2@test.test"]'
    );
    expect(secondEmail).toBeTruthy();
    expect(secondEmail.innerHTML).toBe('test2@test.test');
  });

  it('should display google map', () => {
    const iframe = fixture.nativeElement.querySelector(
      'iframe[src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270.1533831063493!2d30.42803440107744!3d50.454011996624544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDI3JzE0LjQiTiAzMMKwMjUnNDQuMSJF!5e0!3m2!1sru!2sua!4v1602921031468!5m2!1sru!2sua"]'
    );

    expect(iframe).toBeTruthy();
  });
});
