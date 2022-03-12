import { Injectable } from '@angular/core';
import { AuthenticatorService } from './authenticator.service';

import {Router,CanActivate} from '@angular/router';

@Injectable()
export class AuthgaurdService {

  constructor(private route:Router, private authService:AuthenticatorService) {}

    canActivate() {
        if(!this.authService.isTokenExpired()) {
            console.log('in canActivate');
            return true;
        }
        this.route.navigate(['/estock/login']);
        return false;
    }
}
