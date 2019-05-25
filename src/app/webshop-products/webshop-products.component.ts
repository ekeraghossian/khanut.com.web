import { Component, OnInit } from '@angular/core';
import { Product } from './webshop-product-item/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-webshop-products',
  templateUrl: './webshop-products.component.html',
  styleUrls: ['./webshop-products.component.css']
})
export class WebshopProductsComponent implements OnInit {
  products: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
    /* let product1 = new Product(1, 'Apple', 'Fresh apples', 'Fruit', '', './assets/apple.jpg');
    let product2 = new Product(1, 'Orange', 'Fresh oranges', 'Fruit', '', './assets/orange.jpg');
    this.products.push(product1);
    this.products.push(product2);
    this.products.push(product2);
    this.products.push(product2);
    this.products.push(product2);
    this.products.push(product2);
    this.products.push(product2);
    this.products.push(product2);
    this.products.push(product2); */
  }

  async getProducts() {
    await this.productsService.getProducts().subscribe(
      res => {
      this.products = res;
    });
  }
}
