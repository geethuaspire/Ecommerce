import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './Home/home.module';

import { HttpClientModule } from '@angular/common/http';
import { ProductdetailsModule } from './productdetails/productdetails.module';
import { HomeNewModule } from './home-new/home-new.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CartModule } from './cart/cart.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ProductdetailsModule,
    HttpClientModule,
    HomeNewModule,
    CartModule,
    BrowserAnimationsModule,
    RouterModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
