import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeNewComponent } from './home-new.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule} from '@angular/material/list';
import { HomeModule } from '../Home/home.module';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../navbar/navbar.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    HomeNewComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    HomeModule,
    RouterModule,
    NavbarModule,
    MatCardModule,
    
  ]
})
export class HomeNewModule { }
