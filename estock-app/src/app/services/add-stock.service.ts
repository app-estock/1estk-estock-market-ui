import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Guid } from 'guid-typescript';

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
    let  headers= new HttpHeaders();
    headers.set('content-type', 'application/json')
    headers=headers.append("estk_transactionID",Guid.create().toString())
    headers=headers.append("estk_sessionID",Guid.create().toString())
    headers=headers.append("estk_messageID",Guid.create().toString())
    headers=headers.append("estk_creationtimestamp",new Date().getTime().toString())
    console.log("Inside  AddStockService Service");
    console.log(stockPrice);
    const url=`${this.addStockV1Endpoint}${companycode}`;
    console.log(url);
     return this.http.post(url,stockPrice,{headers});

  }
}
