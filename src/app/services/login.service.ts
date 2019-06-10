import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../models/loginRequest.model';
import { tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
  })
export class LoginService{
    baseUrl; 

    constructor(private http: HttpClient) {
        this.baseUrl = environment.URL;
    }

    login(loginService: LoginRequest){
        return this.http.post<{access_token:  string}>(this.baseUrl + '/api/signin', loginService).pipe(tap(res => {
            localStorage.setItem('access_token', res.access_token);
        }))
    }

    logout() {
        localStorage.removeItem('access_token');
      }

    loggedIn(): boolean{
        return localStorage.getItem('access_token') !==  null; //change to verify token is valid from api
      }

}