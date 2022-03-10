import { Component, Input, OnInit,Output } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Company } from '../../company';

import { AddCompanyService } from '../../services/add-company.service';
export class InputErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit  {

 //===============================================FormControls======================================//
  inputCodeFormControl = new FormControl('', [Validators.required]);
  inputTurnoverFormControl = new FormControl('', [Validators.required]);
  inputNameFormControl = new FormControl('', [Validators.required]);
  inputWebsiteFormControl = new FormControl('', [Validators.required]);
  inputExchangeFormControl = new FormControl('', [Validators.required]);
  inputCEOFormControl = new FormControl('', [Validators.required]);
//===============================================FormControls======================================//
  inputMatcher= new InputErrorStateMatcher();
  
  
  company ={}as Company ;
 
  response:any;


  ceo : string="";
  name : string="";
  turnover : number=0; 
  website : string="";
  exchange : string="";
  code : string="";
  constructor(private addCompanyService:AddCompanyService,private snackBar: MatSnackBar) {
   
 
   }

  ngOnInit(): void {
   
  }
  saveCompany()
  { let message="Hooray! successfully added "+ this.code+".";
    console.log("ceo",this.ceo);
    this.company.ceo=this.ceo;
    console.log("exchange",this.exchange);
    this.company.exchange=this.exchange;
    console.log("turnover",this.turnover);
    this.company.turnover=this.turnover;
    console.log("website",this.website);
    this.company.website=this.website;
    console.log("code",this.code);
    this.company.code=this.code;
    console.log("name",this.name);
    this.company.name=this.name;
    console.log("Inside Save Company");
    console.log(this.company);
    this.addCompanyService.addCompany(this.company).subscribe(data => {console.log(data),this.response=data; this.snackBar.open(message,'success',{duration:5000});}); 
   
    console.log("received response",this.response);    
     
  }
}





