import { Component, Input } from '@angular/core';
import { Company } from './company';
import { AuthenticatorService } from './services/authenticator.service';
import { DataStoreService } from './services/data-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'estock-app';
  @Input()
  userLoggedIn:boolean;
  @Input()
  userId:string;
  constructor(private auth:AuthenticatorService, private dataStoreService:DataStoreService)
  {

   


  }
  ngOnInit(){
   
    if(this.dataStoreService.getUserId()!=undefined)
    {
      console.log("Inside  app ongInit")
      this.userId=this.dataStoreService.getUserId();
      this.userLoggedIn=true;
    }
    else{
      this.userLoggedIn=false;
    }
   
   
  }
}
