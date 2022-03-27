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
export class DeleteCompanyService {

  deleteCompanyEndpoint:string;
  host:string;

  constructor(private http:HttpClient) {
    this.host="3.111.246.41";  this.deleteCompanyEndpoint="http://13.233.137.209/CompanyV1/delete/";
   }

  deleteCompany(code: string)
  {    console.log("Inside delete service with company code",code)
     let  headers= new HttpHeaders();
    headers.set('content-type', 'application/json')
    headers=headers.append("estk_transactionID",Guid.create().toString())
    headers=headers.append("estk_sessionID",Guid.create().toString())
    headers=headers.append("estk_messageID",Guid.create().toString())
    headers=headers.append("estk_creationtimestamp",new Date().getTime().toString())
    headers=headers.append( "auth_token","Bearer "+`${localStorage.getItem(TOKEN_NAME)}`);
    headers=headers.append( "Authorization","Bearer "+`${localStorage.getItem(TOKEN_NAME)}`);
      const url =`${this.deleteCompanyEndpoint}${code}`;
      return this.http.delete<Company>(url,{headers});

    
}
}
