import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = ['http://localhost:8080/']

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(signupRequest:any): Observable<any>{
    return this.http.post(BASE_URL + "register", signupRequest)
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(BASE_URL + "authenticate", loginRequest)
  }

  hello(): Observable<any> {
    return this.http.get(BASE_URL + 'api/hello');
  }

  getToken(){
    const jwtToken = localStorage.getItem('JWT');

    if (jwtToken) {
      return jwtToken

    } else {
      console.log("JWT token not found in the Local Storage");
    }
    return ""
  }

  // private createAuthorizationHeader() {
  //   const jwtToken = localStorage.getItem('JWT');
  //   if (jwtToken) {
  //     return new HttpHeaders().set(
  //       'Authorization', 'Bearer ' + jwtToken
  //     )
  //   } else {
  //     console.log("JWT token not found in the Local Storage");
  //   }
  //   return  new HttpHeaders().set(
  //     'x-', 'null'
  //   );
  // }
}
