import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { StockResponse } from '../stockresponse';
import { Guid } from 'guid-typescript';
export const TOKEN_NAME:string = 'jwt_token';

@Injectable({
  providedIn: 'root'
})
export class FetchStocksService {

  fetchStockV1Endpoint: string;

  constructor(private http:HttpClient) {
    this.fetchStockV1Endpoint='https://r5uug5kyk5.execute-api.ap-south-1.amazonaws.com/estk-deploy/api/v1.0/market/stock/get/';
   // this.fetchStockV1Endpoint='http://localhost:8081/StockV1/get/';
   }
  
   fetchStockPrices(companycode:string,startdate:string,enddate:string): Observable<StockResponse> {
    let  headers= new HttpHeaders();
    headers.set('content-type', 'application/json')
    headers=headers.append("estk_transactionID",Guid.create().toString())
    headers=headers.append("estk_sessionID",Guid.create().toString())
    headers=headers.append("estk_messageID",Guid.create().toString())
    headers=headers.append("estk_creationtimestamp",new Date().getTime().toString())
    headers=headers.append( "auth_token","Bearer "+`${localStorage.getItem(TOKEN_NAME)}`);
    headers=headers.append( "Authorization","Bearer "+`${localStorage.getItem(TOKEN_NAME)}`);
    let fromDate= new Date(startdate);
    let toDate=new Date(enddate);
    console.log(headers);
    const url=`${this.fetchStockV1Endpoint}${companycode}//${this.getDateFormat(fromDate)}//${this.getDateFormat(toDate)}`;
    console.log("fetStockV1 endpoint",url)
    return this.http.get<StockResponse>(url,{headers});
}
   getDateFormat(date:Date)
   {
     let year= date.getFullYear();
     let month=date.getMonth()+1;
     console.log(month);
     let day= date.getDate();
     return year+"-"+(month<10?"0"+month:month)+"-"+(day<10?"0"+day:day);

   }
}
