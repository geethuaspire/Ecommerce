import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductdetailsComponent } from './productdetails.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [
    ProductdetailsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    NavbarModule
  ]
})
export class ProductdetailsModule { }
