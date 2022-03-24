import { Component, Input, OnInit } from '@angular/core';
import { ListCompanyService } from '../../services/list-company.service';
import {Company} from '../../company';
import {Response} from '../../response';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'app-company-list-my-view',
  templateUrl: './company-list-my-view.component.html',
  styleUrls: ['./company-list-my-view.component.css']
})
export class CompanyListMyViewComponent implements OnInit {

  @Input()  
  companies: Array<Company>;
  _response={} as Response;

  constructor(private listCompanyService:ListCompanyService,private dataStoreService:DataStoreService) { 
    this.companies=[];
    
   
  }

  ngOnInit() {
   this.listCompanyService.getMyCompanies(this.dataStoreService.getUserId()).subscribe((_response)=>{
     if(_response.length==0)
     {
       console.log("No response");
     }
     else{
     this.companies=_response;
       console.log("response",_response);
       console.log("companies",this.companies);
 
     
      
      }
   })
  }

}
