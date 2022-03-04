import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { CompanyListViewComponent } from './components/company-list-view/company-list-view.component';

import { SearchCompanyComponent } from './components/search-company/search-company.component';


const routes: Routes = [
{
  path: 'estock',
  children:[
    {
      path:'',
      redirectTo:'estock/addCompany',
      pathMatch: 'full',
    },
    {
      path:'addcompany',
      component:AddCompanyComponent
    },
    {
      path:'searchcompany',
      component: SearchCompanyComponent,
     
    },
    {
      path:'listcompany',
      component: CompanyListViewComponent
    },
   
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
