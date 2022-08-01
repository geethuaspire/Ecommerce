import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  AddItems(body:any){
   return this.http.post("http://localhost:3000/pr",body)
  }
}
