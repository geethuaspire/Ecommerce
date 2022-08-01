import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home.service';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
   productData:any="";
   pTitle:any;
   productDetailsdata:any;
  constructor(private homeservice:HomeService,
    private route:ActivatedRoute,
    private productservice:ProductService,
    ) { }

  ngOnInit(): void {
    this.homeservice.getAllProducts()
    .subscribe((data:any)=>{
      this.productData = data;

      this.route.params.subscribe((param:any)=>{
        this.pTitle = param['title'];

        for(let index=0;index<this.productData.length;index++){
             if(this.productData[index].title == this.pTitle){
                 this.productDetailsdata = this.productData[index];
                // console.log("productDetailsdata",this.productDetailsdata);
                 break;
             }
        }
      })
    })
  }
  add(){
   this.productservice.AddItems(this.productDetailsdata).subscribe((data:any)=>{
    alert("Product Added to the Cart");
    console.log("postdata::",data);
   })
  }

}
