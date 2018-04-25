import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgReduxModule } from '@angular-redux/store';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from './@store/store.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    StoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
