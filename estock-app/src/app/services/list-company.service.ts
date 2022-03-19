import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Company } from '../company';
import { Guid } from 'guid-typescript';
export const TOKEN_NAME:string = 'jwt_token';


@Injectable()
export class ListCompanyService {
  

  listCompanV1Endpoint1: string;
  listCompanV1Endpoint2: string;

     
  constructor(private http:HttpClient) {
    this.listCompanV1Endpoint1='http://localhost:8081/listCompanyV1/getall';
    this.listCompanV1Endpoint2='http://localhost:8081/listCompanyV1/get/';
   }

   getCompanies(): Observable<Array<Company>> {
    let  headers= new HttpHeaders();
    headers.set('content-type', 'application/json')
    headers=headers.append("estk_transactionID",Guid.create().toString())
    headers=headers.append("estk_sessionID",Guid.create().toString())
    headers=headers.append("estk_messageID",Guid.create().toString())
    headers=headers.append("estk_creationtimestamp",new Date().getTime().toString())
    headers=headers.append( "auth_token","Bearer "+`${localStorage.getItem(TOKEN_NAME)}`);
    headers=headers.append( "Authorization","Bearer "+`${localStorage.getItem(TOKEN_NAME)}`);
    console.log(headers);
    return this.http.get<Array<Company>>(this.listCompanV1Endpoint1,{headers});
}
getMyCompanies(userId:string): Observable<Array<Company>> {
  let  headers= new HttpHeaders();
  headers.set('content-type', 'application/json')
  headers=headers.append("estk_transactionID",Guid.create().toString())
  headers=headers.append("estk_sessionID",Guid.create().toString())
  headers=headers.append("estk_messageID",Guid.create().toString())
  headers=headers.append("estk_creationtimestamp",new Date().getTime().toString())
  headers=headers.append( "auth_token","Bearer "+`${localStorage.getItem(TOKEN_NAME)}`);
  headers=headers.append( "Authorization","Bearer "+`${localStorage.getItem(TOKEN_NAME)}`);
  console.log(headers);
  const url =`${this.listCompanV1Endpoint2}${userId}`;
  return this.http.get<Array<Company>>(url,{headers});
}

}
