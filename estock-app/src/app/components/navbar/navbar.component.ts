import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private routes: Router) { }
  searchByCode = new FormControl();
  codes: string[] = ['JPPOWER', 'INFY', 'COALINDIA'];
  filteredCodes: Observable<string[]> | undefined;

   
  ngOnInit() {
    this.filteredCodes = this.searchByCode.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }
  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.codes.filter(code => this._normalizeValue(code).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
  searchCode()
  {
      this.routes.navigate(['estock/searchcompany']);
  }
}
