import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../models/loginRequest.model';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class LoginService{
    baseUrl; 

    constructor(private http: HttpClient) {
        this.baseUrl = environment.URL;
    }

    login(loginService: LoginRequest): Observable<String>{
        return this.http.post<String>(this.baseUrl + '/api/signin', loginService);
    }
}