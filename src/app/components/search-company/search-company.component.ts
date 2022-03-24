import { Component, OnInit,Input } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { SearchCompanyService } from 'src/app/services/search-company.service';
import { Company } from 'src/app/company';
import { DataStoreService } from 'src/app/services/data-store.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search-company',
  templateUrl: './search-company.component.html',
  styleUrls: ['./search-company.component.css']
})
export class SearchCompanyComponent implements OnInit {

  searchByCode = new FormControl();
  codes =[] as Array<string>;
  filteredCodes: Observable<string[]>|undefined;
  @Input()
  company={} as Company;
  dataRecieved:boolean=false;
 
  constructor(private routes: Router,private searchCompanyService:SearchCompanyService,private dataStoreService:DataStoreService,activatedRouter:ActivatedRoute) { 
    this.codes=dataStoreService.getCodeList();
   
  }

  ngOnInit() {
    this.filteredCodes = this.searchByCode.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
    this.dataRecieved=false;
  }
  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.codes.filter(code => this._normalizeValue(code).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
 
  onEnter(searchKey:string){
    console.log('search key',searchKey);
    this.searchCompanyService.searchCompany(searchKey).subscribe(company=>{this.company=company;
      console.log("current company",this.company);});
      this.dataRecieved=true;
   
  }
  searchCompany(searchKey:string)
  {
    console.log('search key',searchKey);
    this.searchCompanyService.searchCompany(searchKey).subscribe(company=>{this.company=company;
      console.log("current company",this.company);});
      this.dataRecieved=true;
  }

}
