import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeNewComponent } from './home-new/home-new.component';
import { HomeComponent } from './Home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
  },
  // {
  //   path:'home/:id',
  //   component:ProductdetailsComponent
  //  },
  {
    path:'home/:title',
    component:ProductdetailsComponent
   },
   {
    path:'home_new',
    component:HomeNewComponent
   },
   {
    path:'cart',
    component:CartComponent
   },
   {
     path:'nav',
     component:NavbarComponent
   },
   {
    path:'',
    component:HomeNewComponent
   },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
