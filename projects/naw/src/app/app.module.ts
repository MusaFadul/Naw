import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, Naw_Pages } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoftClickLibModule } from '../../../soft-click-lib/src/public-api';

@NgModule({
  declarations: [AppComponent, ...Naw_Pages],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SoftClickLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
