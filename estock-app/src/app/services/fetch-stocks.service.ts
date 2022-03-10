import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { StockResponse } from '../stockresponse';
import { Guid } from 'guid-typescript';
@Injectable({
  providedIn: 'root'
})
export class FetchStocksService {

  fetchStockV1Endpoint: string;

  constructor(private http:HttpClient) {
    this.fetchStockV1Endpoint='http://localhost:8081/fetchStocksV1/get/';
   }
  
   fetchStockPrices(companycode:string,startdate:string,enddate:string): Observable<StockResponse> {
    let  headers= new HttpHeaders();
    headers.set('content-type', 'application/json')
    headers=headers.append("estk_transactionID",Guid.create().toString())
    headers=headers.append("estk_sessionID",Guid.create().toString())
    headers=headers.append("estk_messageID",Guid.create().toString())
    headers=headers.append("estk_creationtimestamp",new Date().getTime().toString())
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
