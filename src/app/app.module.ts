import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgrxModule } from './store/ngrx.module';
import { HomeComponent } from './pages/home/home.component';
import { DealersComponent } from './pages/dealers/dealers.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/products/product/product.component';
import { SubmitAnApplicationComponent } from './pages/submit-an-application/submit-an-application.component';
import { ProductionComponent } from './pages/production/production.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DealersComponent,
    ContactsComponent,
    CertificatesComponent,
    ProductsComponent,
    SubmitAnApplicationComponent,
    ProductionComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    NgrxModule,
    BrowserAnimationsModule,
    GalleryModule.withConfig({
      thumbPosition: 'bottom',
      imageSize: 'contain',
    }),
    LightboxModule.withConfig({
      panelClass: 'fullscreen',
    }),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
