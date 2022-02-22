import { Component, Input, OnInit } from '@angular/core';
import { ListCompanyService } from '../../services/list-company.service';
import {Company} from '../../company';
import {Response} from '../../response';
@Component({
  selector: 'app-company-list-view',
  templateUrl: './company-list-view.component.html',
  styleUrls: ['./company-list-view.component.css']
})
export class CompanyListViewComponent implements OnInit {
  @Input()
  companies: Array<Company>
  _response={} as Response
  constructor(private listCompanyService:ListCompanyService) { 
    this.companies=[];
    
   
  }

  ngOnInit() {
   this.listCompanyService.getCompanies().subscribe((_response)=>{
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
