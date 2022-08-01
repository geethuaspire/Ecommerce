import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cartLength:any;
  length:any;
  constructor(private navbarservice:NavbarService) { }

  ngOnInit(): void {
    this.getCartlength();
  }
  getCartlength(){
    this.navbarservice.getCartlength()
    .subscribe(data=>{
      console.log("cart data:",data);
       this.cartLength = data;
       this.length =this.cartLength.length;
       console.log("length::",this.length);
    });

}
}
