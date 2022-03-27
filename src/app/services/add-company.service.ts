import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Guid } from 'guid-typescript';



export const TOKEN_NAME:string = 'jwt_token';

@Injectable()
export class AddCompanyService {
  saveCompanyV1Endpoint: string;
  host:string;
  
  constructor(private http:HttpClient) { 
   
    this.saveCompanyV1Endpoint='http://13.232.178.58:8081//CompanyV1/register';
  }

  addCompany(company:any)
  { 
    let  headers= new HttpHeaders();
    headers.set('content-type', 'application/json')
    headers=headers.append("estk_transactionID",Guid.create().toString())
    headers=headers.append("estk_sessionID",Guid.create().toString())
    headers=headers.append("estk_messageID",Guid.create().toString())
    headers=headers.append("estk_creationtimestamp",new Date().getTime().toString()) 
    headers=headers.append( "auth_token","Bearer "+`${localStorage.getItem(TOKEN_NAME)}`);
    headers=headers.append( "Authorization","Bearer "+`${localStorage.getItem(TOKEN_NAME)}`);
    console.log(headers)
    console.log("Inside Service");
    console.log(company);
    const url=`${this.saveCompanyV1Endpoint}`;
    console.log(url);
     return this.http.post(url,company,{headers});

  }
 
  
}
