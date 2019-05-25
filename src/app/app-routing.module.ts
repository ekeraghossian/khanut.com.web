import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterationComponent } from './registeration-form/registeration.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeViewComponent } from './webshop-home-view/home-view.component';
import { WebshopSupplierAddProductComponent } from './webshop-supplier-add-product/webshop-supplier-add-product.component';

const routes: Routes = [
    {path: 'register' , component: RegisterationComponent},
    {path: 'login', component: LoginFormComponent},
    {path: 'supplier', component: WebshopSupplierAddProductComponent},
    {path: '', component: HomeViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}