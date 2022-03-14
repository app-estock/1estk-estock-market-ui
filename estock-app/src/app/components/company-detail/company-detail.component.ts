import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { Company } from 'src/app/company';
import { ListCompanyService } from 'src/app/services/list-company.service';
import {MatAccordion} from '@angular/material/expansion';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Stock } from 'src/app/stock';
import { AddStockService } from 'src/app/services/add-stock.service';
import { FetchStocksService } from 'src/app/services/fetch-stocks.service';
import { StockResponse } from 'src/app/stockresponse';
import { DeleteCompanyService } from 'src/app/services/delete-company.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataStoreService } from 'src/app/services/data-store.service';






                                 

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
 
@Input()
company={}as Company;
@Input()
companies=[] as Array<Company>;
stockResponse={}as StockResponse;
stockPriceList=[] as Array<Stock>;
stock={} as Stock;
stockPrice:number=0;
average=0.0 as number;
minimum=0.0 as number;
maximum=0.0 as number;
toDate:Date | undefined;
fromDate:Date | undefined;
 ELEMENT_DATA : Stock[] = [];
  days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

columns = [
 {
    columnDef: 'stockPrice',
    header: 'Price ₹',
    cell: (element: Stock) => `₹${element.stockPrice}`,
  },
  {
    columnDef: 'stockDate',
    header: 'Date',
    cell: (element: Stock) => `${ new Date(element.stockDate).getDate()} ${ this.months[new Date(element.stockDate).getMonth()]} ${ new Date(element.stockDate).getFullYear()}, ${ this.days[new Date(element.stockDate).getDay()]}  `,
  },
  {
    columnDef: 'stockTime',
    header: 'Time',
    cell: (element: Stock) => `${element.stockTime}`,
  },
];
dataSource = this.ELEMENT_DATA;
displayedColumns = this.columns.map(c => c.columnDef);
                                
  constructor(private addStockService:AddStockService,private fetchStockService:FetchStocksService,private deleteService:DeleteCompanyService,private dataStoreService:DataStoreService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  
  fetchStockPriceInRange(code:string)
  { 
   let  enddate=this.toDate?.toISOString().toString() as string;
   let  startdate=this.fromDate?.toISOString().toString() as string;
   let message="Fetched records!";
    console.log("company code",code);
    console.log("fromDate",this.fromDate);
    console.log("fromDate",this.fromDate?.toISOString());
   
    console.log("startDate",startdate);
    
    console.log("toDate",this.toDate);
    console.log("toDate",this.toDate?.toISOString());
    
    console.log("endDate",enddate);
    this.fetchStockService.fetchStockPrices(code,startdate,enddate).subscribe(stockResponse=>{this.stockResponse=stockResponse;
      console.log("stockResponse",this.stockResponse);
      this.ELEMENT_DATA=stockResponse.stockPriceDetailList;
      this.dataSource = this.ELEMENT_DATA;
      this.displayedColumns = this.columns.map(c => c.columnDef);
     
      this.average=this.stockResponse.averagePrice.toFixed(2) as unknown as number;
      this.minimum=this.stockResponse.minimumPrice;
      this.maximum=this.stockResponse.maximumPrice;
      this.snackBar.open(message,'Success',{duration:5000});
     
  
  
  })
   


    
  }
}
