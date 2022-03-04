import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Company } from '../company';
import { DataStoreService } from './data-store.service';

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
  
      const url =`${this.deleteCompanyEndpoint}${code}`;
      return this.http.delete<Company>(url);

    
}
}
