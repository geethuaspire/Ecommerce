import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home.component';
import { MatListModule } from '@angular/material/list';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatListModule,
    NavbarModule
    
  ],
  exports:[
    HomeComponent,
  ]
})
export class HomeModule { }
