import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Customer } from "../models/cutomer.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class RegisterationService{
    baseUrl; 

    constructor(private http: HttpClient) {
        this.baseUrl = environment.URL;
    }

    registerNewUser(customer: Customer): Observable<String>{
        return this.http.post<String>(this.baseUrl + '/api/register', customer);
    }
}