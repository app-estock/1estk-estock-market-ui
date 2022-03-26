import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http';
import { User } from '../User';
import {Observable} from 'rxjs';
import * as jwt from 'jwt-decode';
export const TOKEN_NAME:string = 'jwt_token';

@Injectable()
export class AuthenticatorService {

  springEndPoint:string;
  token:string;
  host:string;
    constructor(private httpClient:HttpClient){
     
      this.springEndPoint="http://api-gateway.estk.com/authenticateV1";
      this.token="";
   
    }
  
    registerUser(newUser:User){
      const url= this.springEndPoint+"/register";
      console.log('newuser',newUser);
      return this.httpClient.post(url,newUser,{responseType: 'text'});
    }
  
    loginUser(newUser:User)
    {
      const url=this.springEndPoint+"/login";
      return this.httpClient.post(url,newUser);
    }
    
    setToken(token:string)
    {
      return localStorage.setItem(TOKEN_NAME,token);
    }
    getToken()
    {
      return localStorage.getItem(TOKEN_NAME)?.toString();
    }
  
    deleteToken()
    {
      return localStorage.removeItem(TOKEN_NAME);
    }
  
    getTokenExpirationDate(token:string): Date{
      const decoded = jwt(token);
      if(decoded.exp === undefined) return null!;
      const date= new Date(0);
      date.setUTCSeconds(decoded.exp);
      return date;
    }
    isTokenExpired(token? : string): boolean{
      if(!token)token = this.getToken();
      if(!token) return true;
      const date = this.getTokenExpirationDate(token);
      if(date === undefined || date===null) return false;
      return !(date.valueOf()> new Date().valueOf());
    }
}
