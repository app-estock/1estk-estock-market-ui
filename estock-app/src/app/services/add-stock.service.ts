import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddStockService {

  addStockV1Endpoint: string;

  constructor(private http:HttpClient) { 
    this.addStockV1Endpoint='http://localhost:8081/addStockV1/add/';
  }

  addStockPrice(stockPrice:any,companycode:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/json' }); 
    console.log("Inside  AddStockService Service");
    console.log(stockPrice);
    const url=`${this.addStockV1Endpoint}${companycode}`;
    console.log(url);
     return this.http.post(url,stockPrice);

  }
}
