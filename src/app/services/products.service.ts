import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Product } from "../webshop-products/webshop-product-item/product.model";

@Injectable({
    providedIn: 'root'
  })
export class ProductsService{
    baseUrl; 

    constructor(private http: HttpClient) {
        this.baseUrl = environment.URL;
    }

    public getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseUrl + '/api/product-service/products');
    }
}