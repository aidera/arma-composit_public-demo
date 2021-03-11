import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { SubmitAnApplicationComponent } from './pages/submit-an-application/submit-an-application.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';
import { DealersComponent } from './pages/dealers/dealers.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ProductionComponent } from './pages/production/production.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'production', component: ProductionComponent },
      {
        path: 'submit-an-application',
        component: SubmitAnApplicationComponent,
      },
      { path: 'certificates', component: CertificatesComponent },
      { path: 'dealers', component: DealersComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: '**', component: HomeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
