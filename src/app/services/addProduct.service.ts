import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { WriteCategory } from "../models/writeCategory.model";
import { WriteSubCategory } from "../models/writeSubCategory.model";
import { WriteProduct } from "../models/writeProduct.model";

@Injectable({
    providedIn: 'root'
  })
export class AddProductService{
    baseUrl; 

    constructor(private http: HttpClient) {
        this.baseUrl = environment.URL;
    }

    public getCategories(): Observable<WriteCategory[]> {
        return this.http.get<WriteCategory[]>(this.baseUrl + '/api/supplier-service/categories');
    }

    public getSubCategories(catId: number): Observable<WriteSubCategory[]> {
        return this.http.get<WriteSubCategory[]>(this.baseUrl + '/api/supplier-service/subcategories/' + catId);
    }

    public addProduct(product: WriteProduct) {
        return this.http.post(this.baseUrl + '/api/supplier-service/add-product', product);
    }
}