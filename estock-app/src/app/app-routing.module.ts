import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { CompanyListViewComponent } from './components/company-list-view/company-list-view.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { SearchCompanyComponent } from './components/search-company/search-company.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { AuthgaurdService } from './services/authgaurd.service';
import { PanelComponent } from './panel/panel.component';
import { CompanyListMyViewComponent } from './components/company-list-my-view/company-list-my-view.component';


const routes: Routes = [
{
  path: 'estock',
  children:[
    {
      path:'',
      redirectTo:'estock/login',
      pathMatch: 'full',
    },
    {
			path:'register',
			component:RegisterUserComponent
		},
    {
			path:'login',
			component:LoginUserComponent
		},
  ]
}
];
const userRoutes:Routes=[
  {

  path :'panel',
  component: PanelComponent,
  children:[
    {
      path:'',
      redirectTo:'/panel/estock/addcompany',
      pathMatch:'full',
    },
    {
      path:'estock/addcompany',
      component:AddCompanyComponent,
      canActivate: [AuthgaurdService]

    },
    {
      path:'estock/searchcompany',
      component: SearchCompanyComponent,
      canActivate: [AuthgaurdService]
    },
    {
      
      path:'estock/listcompany',
      component: CompanyListViewComponent,
      canActivate: [AuthgaurdService]
    },
    {
      
      path:'estock/listmycompanies',
      component: CompanyListMyViewComponent,
      canActivate: [AuthgaurdService]
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
