import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Company } from '../company';
import { DataStoreService } from './data-store.service';
import { Guid } from 'guid-typescript';
export const TOKEN_NAME:string = 'jwt_token';
@Injectable({
  providedIn: 'root'
})
export class SearchCompanyService {
searchCompanyEndpoint:string;
 

  constructor(private http:HttpClient) {
    this.searchCompanyEndpoint="http://13.233.137.209/CompanyV1/info/"
   }

  searchCompany(searchKey: string):Observable<Company>
  {    console.log("Inside service and found Key",searchKey)
  let  headers= new HttpHeaders();
  headers.set('content-type', 'application/json')
  headers=headers.append("estk_transactionID",Guid.create().toString())
  headers=headers.append("estk_sessionID",Guid.create().toString())
  headers=headers.append("estk_messageID",Guid.create().toString())
  headers=headers.append("estk_creationtimestamp",new Date().getTime().toString())
  headers=headers.append( "auth_token","Bearer "+`${localStorage.getItem(TOKEN_NAME)}`);
  headers=headers.append( "Authorization","Bearer "+`${localStorage.getItem(TOKEN_NAME)}`);
      const url =`${this.searchCompanyEndpoint}${searchKey}`;
      return this.http.get<Company>(url,{headers});

    
}
}
