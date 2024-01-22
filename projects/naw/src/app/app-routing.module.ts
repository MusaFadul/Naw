import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NawHomeComponent } from './modules/home-module/naw-home/naw-home.component';
import { NawAboutComponent } from './modules/about-module/naw-about/naw-about.component';
import { NawContactComponent } from './modules/contact-module/naw-contact/naw-contact.component';
import { NawCareersComponent } from './modules/careers-module/naw-careers/naw-careers.component';
import { NawProductsComponent } from './modules/products-module/naw-products/naw-products.component';

const routes: Routes = [
  { path: '', component: NawHomeComponent },
  { path: 'about', component: NawAboutComponent },
  { path: 'products', component: NawProductsComponent },
  { path: 'careers', component: NawCareersComponent },
  { path: 'contact', component: NawContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
