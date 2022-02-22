import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { Company } from 'src/app/company';
import { ListCompanyService } from 'src/app/services/list-company.service';
import {MatAccordion} from '@angular/material/expansion';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Stock } from 'src/app/stock';



const ELEMENT_DATA : Stock[] = [
                                {companycode:"JPPOWER",stockDate: "2022-02-18T18:30:00.000+00:00",stockPrice:1200,stockTime:"11:07:18"},
                                {companycode:"JPPOWER",stockDate: "2022-02-18T18:30:00.000+00:00",stockPrice:1201,stockTime:"11:07:18"},
                                {companycode:"JPPOWER",stockDate: "2022-02-18T18:30:00.000+00:00",stockPrice:1202,stockTime:"11:07:18"},
                                {companycode:"JPPOWER",stockDate: "2022-02-18T18:30:00.000+00:00",stockPrice:1204,stockTime:"11:07:18"},
                              
                                   ];

                                 

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
 
@Input()
company={}as Company;
stock={} as Stock;
stockPrice:number=0;
endDate:Date=new Date();
startDate:Date=new Date();
columns = [
 {
    columnDef: 'stockPrice',
    header: 'Price',
    cell: (element: Stock) => `${element.stockPrice}`,
  },
  {
    columnDef: 'stockDate',
    header: 'Date',
    cell: (element: Stock) => `${element.stockDate}`,
  },
  {
    columnDef: 'stockTime',
    header: 'Time',
    cell: (element: Stock) => `${element.stockTime}`,
  },
];
dataSource = ELEMENT_DATA;
displayedColumns = this.columns.map(c => c.columnDef);
                                
  constructor() { }

  ngOnInit(): void {
  }

  deleteCompany()
  {

  }

}
