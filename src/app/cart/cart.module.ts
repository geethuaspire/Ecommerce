import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from '../navbar/navbar.module';
import { CartComponent } from './cart.component';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    NavbarModule
  ]
})
export class CartModule { }
