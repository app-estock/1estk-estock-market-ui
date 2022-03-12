import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import { AuthenticatorService } from '../services/authenticator.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataStoreService } from '../services/data-store.service';


export class InputErrorStateMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
	  const isSubmitted = form && form.submitted;
	  return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
	}
  }
@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  //===============================================FormControls======================================//
  inputUserIdFormControl = new FormControl('', [Validators.required]);
  inputPasswordFormControl = new FormControl('', [Validators.required]);
 //===============================================FormControls======================================//
 inputMatcher= new InputErrorStateMatcher();
  newUser:User;

constructor(private authService:AuthenticatorService, private router:Router,private dataStoreService:DataStoreService) {
	this.newUser = new User();
}

ngOnInit()
{
}

loginUser()
{
	console.log("Register User", this.newUser.userId, this.newUser.password);
	
	
	this.authService.loginUser(this.newUser).subscribe(data=>{
		console.log("Logged in!");
		this.dataStoreService.setUserId(this.newUser.userId);
		console.log("datastore:"+this.dataStoreService);
	if(data['token'])
	{
		this.authService.setToken(data['token']);
		console.log('token', data['token']);
		
		this.router.navigate(['/panel']);
		this.ngOnInit();
	}
	

	})

  }

}
