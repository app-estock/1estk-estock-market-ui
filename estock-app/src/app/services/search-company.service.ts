import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Company } from '../company';
import { DataStoreService } from './data-store.service';

@Injectable({
  providedIn: 'root'
})
export class SearchCompanyService {
searchCompanyEndpoint:string;
 

  constructor(private http:HttpClient) {
    this.searchCompanyEndpoint="http://localhost:8081/searchCompanyV1/info/"
   }

  searchCompany(searchKey: string):Observable<Company>
  {    console.log("Inside service and found Key",searchKey)
  
      const url =`${this.searchCompanyEndpoint}${searchKey}`;
      return this.http.get<Company>(url);

    
}
}
