import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { WebshopNavbarComponent } from './webshop-navbar/webshop-navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterationComponent } from './registeration-form/registeration.component';
import { FormsModule }   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegisterationService } from './services/registeration.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginService } from './services/login.service';
import { WebshopUserbarComponent } from './webshop-userbar/webshop-userbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WebshopCategoriesComponent } from './webshop-categories/webshop-categories.component';
import { TreeModule } from 'angular-tree-component';
import { WebshopProductsComponent } from './webshop-products/webshop-products.component';
import { WebshopProductItemComponent } from './webshop-products/webshop-product-item/webshop-product-item.component';
import { CategoriesService } from './services/categories.service';
import { ProductsService } from './services/products.service';
import { HomeViewComponent } from './webshop-home-view/home-view.component';
import { WebshopShoppingcartComponent } from './webshop-shoppingcart/webshop-shoppingcart.component';
import { ShoppingcartDataService } from './data-services/shoppingcart.dataservice';
import { WebshopSupplierAddProductComponent } from './webshop-supplier-add-product/webshop-supplier-add-product.component';
import { AddProductService } from './services/addProduct.service';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginGuard } from './services/loginGuard.guard';


@NgModule({
  declarations: [
    AppComponent,
    WebshopNavbarComponent,
    RegisterationComponent,
    LoginFormComponent,
    WebshopUserbarComponent,
    WebshopCategoriesComponent,
    WebshopProductsComponent,
    WebshopProductItemComponent,
    HomeViewComponent,
    WebshopShoppingcartComponent,
    WebshopSupplierAddProductComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    TreeModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return     localStorage.getItem('access_token');},
        whitelistedDomains: ['localhost:4200'],
        blacklistedRoutes: ['http://localhost:8080/api/signin', 'http://localhost:8080/api/register']
      }
    })
  ],
  providers: [RegisterationService, LoginService, CategoriesService, ProductsService, ShoppingcartDataService, AddProductService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
