import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './products/product.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, routingComponents, LoginComponent],
  imports: [AppRoutingModule, BrowserModule, HttpClientModule,ProductModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
