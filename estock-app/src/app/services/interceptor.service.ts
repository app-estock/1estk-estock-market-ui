import {Injectable} from '@angular/core';
import {
    HttpRequest,   
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs/'
import { AuthenticatorService } from './authenticator.service';
@Injectable()
export class TokenInterceptor implements HttpInterceptor{

    constructor(private auth:AuthenticatorService)
    {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('In intercept this.auth.getToken()');

        request = request.clone({
            setHeaders: {
                Authorization:"Bearer "+`${this.auth.getToken()}`
            }
        });
        return next.handle(request);
    }
}