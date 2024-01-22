import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoftClickLibModule } from '../../../soft-click-lib/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SoftClickLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
