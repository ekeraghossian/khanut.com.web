import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product.model';
import { ShoppingcartDataService } from 'src/app/data-services/shoppingcart.dataservice';

@Component({
  selector: 'app-webshop-product-item',
  templateUrl: './webshop-product-item.component.html',
  styleUrls: ['./webshop-product-item.component.css']
})
export class WebshopProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor(private shoppingcartDataService: ShoppingcartDataService) { }

  ngOnInit() {
  }

  OnAddToCartClicked() {
    this.shoppingcartDataService.addElementToObservableArray(this.product);
    console.log("added");
  }

}
