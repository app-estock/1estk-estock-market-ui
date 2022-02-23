import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import{MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { AddStockComponent } from './components/add-stock/add-stock.component';
import { CompanyListViewComponent } from './components/company-list-view/company-list-view.component';
import { StockListViewComponent } from './components/stock-list-view/stock-list-view.component';
import { AddCompanyService } from './services/add-company.service';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { ListCompanyService } from './services/list-company.service';
import { SearchCompanyService } from './services/search-company.service';
import { DataStoreService } from './services/data-store.service';
import { SearchCompanyComponent } from './components/search-company/search-company.component';
import { AddStockService } from './services/add-stock.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddCompanyComponent,
    AddStockComponent,
    CompanyListViewComponent,
    StockListViewComponent,
    CompanyDetailComponent,
    SearchCompanyComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDividerModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatDatepickerModule
    


    
    
    
  ],
  providers: [AddCompanyService,ListCompanyService,SearchCompanyService,DataStoreService,AddStockService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
