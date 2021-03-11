import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FullscreenMenuComponent } from './components/fullscreen-menu/fullscreen-menu.component';
import { CoreAnimationDirective } from './directives/gsap/core-animation.directive';
import { FadeInAnimationDirective } from './directives/gsap/fade-in-animation.directive';
import { FadeInAndUpMultiplyAnimationDirective } from './directives/gsap/fade-in-and-up-multiply-animation.directive';
import { AbstractFormControlComponent } from './components/form-controls/abstract-form-control.component';
import { TextInputComponent } from './components/form-controls/text-input/text-input.component';
import { MaterialModule } from './modules/material.module';
import { TextareaComponent } from './components/form-controls/textarea/textarea.component';
import { CheckboxComponent } from './components/form-controls/checkbox/checkbox.component';
import { ModalComponent } from './components/modal/modal.component';
import { PageLoaderComponent } from './components/page-loader/page-loader.component';
import { FadeInAndUpAnimationDirective } from './directives/gsap/fade-in-and-up-animation.directive';
import { SafeUrlPipe } from './pipes/safe-url/safe-url.pipe';
import { ProductFilterPipe } from './pipes/product-filter/product-filter.pipe';
import { CursorComponent } from './components/cursor/cursor.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    SidebarComponent,
    HeaderComponent,
    FullscreenMenuComponent,
    CoreAnimationDirective,
    FadeInAnimationDirective,
    FadeInAndUpAnimationDirective,
    FadeInAndUpMultiplyAnimationDirective,
    AbstractFormControlComponent,
    TextInputComponent,
    TextareaComponent,
    CheckboxComponent,
    ModalComponent,
    PageLoaderComponent,
    SafeUrlPipe,
    ProductFilterPipe,
    CursorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalComponent,
    MainLayoutComponent,
    SidebarComponent,
    HeaderComponent,
    FullscreenMenuComponent,
    CoreAnimationDirective,
    FadeInAnimationDirective,
    FadeInAndUpAnimationDirective,
    FadeInAndUpMultiplyAnimationDirective,
    AbstractFormControlComponent,
    TextInputComponent,
    TextareaComponent,
    CheckboxComponent,
    ModalComponent,
    PageLoaderComponent,
    SafeUrlPipe,
    ProductFilterPipe,
    CursorComponent,
  ],
})
export class SharedModule {}
