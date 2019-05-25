import { Component, OnInit, DoCheck } from '@angular/core';
import { Product } from '../webshop-products/webshop-product-item/product.model';
import { ShoppingcartDataService } from '../data-services/shoppingcart.dataservice';

@Component({
  selector: 'app-webshop-shoppingcart',
  templateUrl: './webshop-shoppingcart.component.html',
  styleUrls: ['./webshop-shoppingcart.component.css']
})
export class WebshopShoppingcartComponent implements OnInit {
  products: Product[];

  constructor(private shoppingcartDataService: ShoppingcartDataService) { }

  ngOnInit() {
    this.shoppingcartDataService.products.subscribe((res: Product[]) => {this.products = res, console.log('from shopping cart')});
  }
}
