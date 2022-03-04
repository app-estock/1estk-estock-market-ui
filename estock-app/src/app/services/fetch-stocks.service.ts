import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { StockResponse } from '../stockresponse';

@Injectable({
  providedIn: 'root'
})
export class FetchStocksService {

  fetchStockV1Endpoint: string;

  constructor(private http:HttpClient) {
    this.fetchStockV1Endpoint='http://localhost:8081/fetchStocksV1/get/';
   }

   fetchStockPrices(companycode:string,startdate:string,enddate:string): Observable<StockResponse> {
    const url=`${this.fetchStockV1Endpoint}${companycode}//${startdate}//${enddate}`;
    console.log("fetStockV1 endpoint",url)
    return this.http.get<StockResponse>(url);
}
}
