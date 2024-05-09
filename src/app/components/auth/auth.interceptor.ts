import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../service/auth.service';

@Injectable({
    providedIn:'root'
})
export class AuthInterseptor implements HttpInterceptor {
  constructor(private authService:AuthService){};


  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const token = this.authService.getToken()

    req = this.addToken(req,token);

    return next.handle(req);
  }

  

  private addToken(request:HttpRequest<any>,token:string){
    return request.clone(
      {
        setHeaders:{
            "Authorization": `Bearer ${token}`,
            "Creator":"Sankar"
        }    
      }
    )
  }
}
