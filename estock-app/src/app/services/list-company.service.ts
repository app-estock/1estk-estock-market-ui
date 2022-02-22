import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Company } from '../company';


@Injectable()
export class ListCompanyService {
  listCompanV1Endpoint: string;

  constructor(private http:HttpClient) {
    this.listCompanV1Endpoint='http://localhost:8081/listCompanyV1/getall';
   }

   getCompanies(): Observable<Array<Company>> {
    return this.http.get<Array<Company>>(this.listCompanV1Endpoint);
}

}
