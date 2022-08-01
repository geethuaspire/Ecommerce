import { getSupportedInputTypes } from '@angular/cdk/platform';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HomeNewService {

  constructor(private http:HttpClient) { }

  getprod(){
    return this.http.get("http://localhost:3000/prod");
  }

  // getCartlength(){
  //   return this.http.get("http://localhost:3000/pr");
  // }
}



