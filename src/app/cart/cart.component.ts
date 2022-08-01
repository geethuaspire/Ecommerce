import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
cartData:any;
  constructor(
    private cartservice:CartService
  ) { }

  ngOnInit(): void {
    this.cartservice.getCartProducts().
    subscribe(data=>{
    console.log("cartdata::",data);
    this.cartData = data;
    })
  }

}
