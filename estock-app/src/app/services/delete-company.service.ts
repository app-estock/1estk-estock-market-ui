import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Company } from '../company';
import { DataStoreService } from './data-store.service';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class DeleteCompanyService {

  deleteCompanyEndpoint:string;
 

  constructor(private http:HttpClient) {
    this.deleteCompanyEndpoint="http://localhost:8081/deleteCompanyV1/delete/"
   }

  deleteCompany(code: string)
  {    console.log("Inside delete service with company code",code)
     let  headers= new HttpHeaders();
    headers.set('content-type', 'application/json')
    headers=headers.append("estk_transactionID",Guid.create().toString())
    headers=headers.append("estk_sessionID",Guid.create().toString())
    headers=headers.append("estk_messageID",Guid.create().toString())
    headers=headers.append("estk_creationtimestamp",new Date().getTime().toString())
  
      const url =`${this.deleteCompanyEndpoint}${code}`;
      return this.http.delete<Company>(url,{headers});

    
}
}
