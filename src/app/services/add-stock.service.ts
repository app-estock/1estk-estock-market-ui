import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Guid } from 'guid-typescript';

export const TOKEN_NAME:string = 'jwt_token';
@Injectable({
  providedIn: 'root'
})
export class AddStockService {

  addStockV1Endpoint: string;
   host:string;
  constructor(private http:HttpClient) { 

    this.addStockV1Endpoint='http://13.232.178.58:8081/StockV1/add/';
  }

  addStockPrice(stockPrice:any,companycode:string)
  {
    let  headers= new HttpHeaders();
    headers.set('content-type', 'application/json')
    headers=headers.append("estk_transactionID",Guid.create().toString())
    headers=headers.append("estk_sessionID",Guid.create().toString())
    headers=headers.append("estk_messageID",Guid.create().toString())
    headers=headers.append("estk_creationtimestamp",new Date().getTime().toString())
    headers=headers.append( "auth_token","Bearer "+`${localStorage.getItem(TOKEN_NAME)}`);
    headers=headers.append( "Authorization","Bearer "+`${localStorage.getItem(TOKEN_NAME)}`);
    console.log("Inside  AddStockService Service");
    console.log(stockPrice);
    const url=`${this.addStockV1Endpoint}${companycode}`;
    console.log(url);
     return this.http.post(url,stockPrice,{headers});

  }
}
