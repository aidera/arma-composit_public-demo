import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { FullscreenMenuComponent } from '../../shared/components/fullscreen-menu/fullscreen-menu.component';
import { SafeUrlPipe } from '../../shared/pipes/safe-url/safe-url.pipe';
import { FadeInAndUpMultiplyAnimationDirective } from '../../shared/directives/gsap/fade-in-and-up-multiply-animation.directive';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
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
      imports: [RouterTestingModule],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display company name', () => {
    expect(fixture.nativeElement.innerHTML).toContain('Arma-composit');
  });
});
