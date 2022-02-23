import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { Company } from 'src/app/company';
import { ListCompanyService } from 'src/app/services/list-company.service';
import {MatAccordion} from '@angular/material/expansion';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Stock } from 'src/app/stock';
import { AddStockService } from 'src/app/services/add-stock.service';



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
endDate:Date|undefined
startDate:Date|undefined
toDate:Date | undefined;
fromDate:Date | undefined;
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
                                
  constructor(private addStockService:AddStockService) { }

  ngOnInit(): void {
  }

  deleteCompany()
  {

  }
  addStockPrice(code: string)
  { let response : any;
    console.log("company code",code);
    console.log("stockPrice",this.stockPrice);
    this.stock.stockPrice=this.stockPrice;
    this.addStockService.addStockPrice(this.stock,code).subscribe(data => {console.log(data);response=data}); 
    console.log("received response",response);
  }
  fetchStockPriceInRange(code:string)
  { console.log("company code",code);
    
    console.log("toDate",this.toDate);
    console.log("toDate",this.toDate?.toISOString());
    console.log("fromDate",this.fromDate);
    console.log("fromDate",this.fromDate?.toISOString());
  }
}
