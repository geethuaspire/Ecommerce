import { Component, OnInit } from '@angular/core';
import { HomeNewService } from '../home-new.service';

@Component({
  selector: 'app-home-new',
  templateUrl: './home-new.component.html',
  styleUrls: ['./home-new.component.scss']
})
export class HomeNewComponent implements OnInit {
  constructor(
    private homenewservice:HomeNewService,
    ) { }
  prodData:any;
  ngOnInit(): void {
     this.homenewservice.getprod()
     .subscribe(data=>{
        this.prodData = data;
        console.log("datanew",data);
      })
  }
  }
