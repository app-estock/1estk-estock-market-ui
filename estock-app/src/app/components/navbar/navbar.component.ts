import { Component, OnInit,Input,Output } from '@angular/core';
import { AuthenticatorService } from 'src/app/services/authenticator.service';
import { Router } from '@angular/router';
import { DataStoreService } from 'src/app/services/data-store.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
   
})
export class NavbarComponent implements OnInit {
  @Input()
  userLoggedIn:boolean;
  @Input()
  userId:String;
  ngOnInit() {
    //this.userLoggedIn=false;
    if(this.dataStoreService.getUserId())
    { console.log(this.dataStoreService.getUserId());
      this.userLoggedIn=true;
      this.userId=this.dataStoreService.getUserId();
      console.log("userID received"+this.userId);
    }
   
  }
 
  constructor(private auth:AuthenticatorService, private routes:Router,private dataStoreService:DataStoreService) {
  
  
  }

  Logout()
{
  this.auth.deleteToken();
  this.userLoggedIn=false;
  this.routes.navigate(['/estock/login']);
  this.ngOnInit();
}
  
 
}
