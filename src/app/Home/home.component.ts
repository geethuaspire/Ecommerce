import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
ProductData:any;
  constructor(private homeservice:HomeService) { }

  ngOnInit(): void {
    this.homeservice.getAllProducts().
    subscribe(data=>{
      this.ProductData = data;
    })
  }
  
}
