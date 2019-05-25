import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { ShoppingcartDataService } from '../data-services/shoppingcart.dataservice';
import { Product } from '../webshop-products/webshop-product-item/product.model';

@Component({
  selector: 'app-webshop-userbar',
  templateUrl: './webshop-userbar.component.html',
  styleUrls: ['./webshop-userbar.component.css']
})
export class WebshopUserbarComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  faSearch = faSearch;
  numberOfProductsInShoppingCart: number;
  
  constructor(private shoppingcartDataService: ShoppingcartDataService) { }

  ngOnInit() {
    this.shoppingcartDataService.products.subscribe((res: Product[]) => {this.numberOfProductsInShoppingCart = res.length});
  }


}
