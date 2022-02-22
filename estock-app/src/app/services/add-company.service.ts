import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';





@Injectable()
export class AddCompanyService {
  saveCompanyV1Endpoint: string;

  constructor(private http:HttpClient) { 
    this.saveCompanyV1Endpoint='http://localhost:8081/saveCompanyV1/register';
  }

  addCompany(company:any)
  {
    let headers      = new Headers({ 'Content-Type': 'application/json' }); 
    console.log("Inside Service");
    console.log(company);
    const url=`${this.saveCompanyV1Endpoint}`;
    console.log(url);
     return this.http.post(url,company);

  }
 
  
}
