import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from "../models/loginrequest.model";
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