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
    this.deleteCompanyEndpoint="http://r5uug5kyk5.execute-api.ap-south-1.amazonaws.com/estk-deploy/api/v1.0/market/company/delete/";
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
