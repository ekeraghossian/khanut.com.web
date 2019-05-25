import { Product } from "../webshop-products/webshop-product-item/product.model";
import { Injectable } from "@angular/core";
import { Observable, Subject, BehaviorSubject } from "rxjs";
import { take } from 'rxjs/operators';

@Injectable()
export class ShoppingcartDataService{
    products: Observable<Product[]>;
    productsSubject: BehaviorSubject<Product[]>;

    constructor() {
        this.productsSubject = new BehaviorSubject<Product[]>([]);
        this.products = this.productsSubject.asObservable();
    }

    addElementToObservableArray(item) {
        this.products.pipe(take(1)).subscribe(val => {
          const newArr = [...val, item];
          this.productsSubject.next(newArr);
        })
      }

}