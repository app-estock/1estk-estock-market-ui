import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticatorService } from '../services/authenticator.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {User} from '../User';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export class InputErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  //===============================================FormControls======================================//
  inputFirstNameFormControl = new FormControl('', [Validators.required]);
  inputLastNameFormControl = new FormControl('', [Validators.required]);
  inputUserIdFormControl = new FormControl('', [Validators.required]);
  inputPasswordFormControl = new FormControl('', [Validators.required]);
//===============================================FormControls======================================//
  inputMatcher= new InputErrorStateMatcher();
  
  newUser:User;
  lastName:string;
  firstName:string;
  userId:string;
  password:string;



  constructor(private authService:AuthenticatorService, private router:Router) {
    this.newUser = new User();
  }
  
  ngOnInit()
  {
  }
  
  registerUser()
  {
    console.log("Register User", this.newUser.userId, this.newUser.firstName);
    console.log('new user', this.newUser);
    this.authService.registerUser(this.newUser).subscribe((data)=>{
      console.log('user data->', data);
  
    this.router.navigate(['/estock/login']);
  
    })
  
    }
    resetInput()
    {
      this.firstName='';
      this.lastName='';
      this.lastName='';
      this,this.password='';
    }
}
