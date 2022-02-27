import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Company } from '../company';
import { Guid } from 'guid-typescript';



@Injectable()
export class ListCompanyService {
  

  listCompanV1Endpoint: string;
     
  constructor(private http:HttpClient) {
    this.listCompanV1Endpoint='http://localhost:8081/listCompanyV1/getall';
   }

   getCompanies(): Observable<Array<Company>> {
    let  headers= new HttpHeaders();
    headers.set('content-type', 'application/json')
    headers.set('Access-Control-Allow-Origin', '*');
    headers=headers.append("estk_transactionID",Guid.create().toString())
    headers=headers.append("estk_sessionID",Guid.create().toString())
    headers=headers.append("estk_messageID",Guid.create().toString())
    headers=headers.append("estk_creationtimestamp",new Date().getTime().toString())
    console.log(headers);
    return this.http.get<Array<Company>>(this.listCompanV1Endpoint,{headers});
}

}
