import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Category } from "../models/category.model";
import { SubCategory } from "../models/subCategory.model";

@Injectable({
    providedIn: 'root'
  })
export class CategoriesService{
    baseUrl; 

    constructor(private http: HttpClient) {
        this.baseUrl = environment.URL;
    }

    public getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(this.baseUrl + '/api/product-service/categories');
    }

    public getSubCategories(id: string): Observable<SubCategory[]> {
        return this.http.get<SubCategory[]>(this.baseUrl + '/api/product-service/subcategoriesId?id=' + id);
    }
}