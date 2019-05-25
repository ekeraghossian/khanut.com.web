import { Component, OnInit } from '@angular/core';
import { WriteCategory } from '../models/writeCategory.model';
import { AddProductService } from '../services/addProduct.service';
import { WriteSubCategory } from '../models/writeSubCategory.model';
import { NgForm } from '@angular/forms';
import { calcBindingFlags } from '@angular/core/src/view/util';
import { WriteProduct } from '../models/writeProduct.model';

@Component({
  selector: 'app-webshop-supplier-add-product',
  templateUrl: './webshop-supplier-add-product.component.html',
  styleUrls: ['./webshop-supplier-add-product.component.css']
})
export class WebshopSupplierAddProductComponent implements OnInit {
  categories: WriteCategory[];
  selectedCategory: WriteCategory;
  subCategories: WriteSubCategory[];
  selectedSubCategory: WriteSubCategory;

  constructor(private addProductService: AddProductService) { }

  ngOnInit() {
    this.getCategories();
    this.selectedCategory = null;
  }

  async getCategories() {
    await this.addProductService.getCategories().subscribe(
      res => {
      this.categories = res;
    });
  }

  async getSubCategories(event) {
    await this.addProductService.getSubCategories(event.target.value).subscribe(
      res => {
      this.subCategories = res;
    });
    for (var val of this.categories) {
      if(event.target.value == val.id) {
        this.selectedCategory = val;
      }
    }
  }

  setSub(event) {
    for (var val of this.subCategories) {
      if(event.target.value == val.id) {
        this.selectedSubCategory = val;
      }
    }
  }

  onSaveProduct(f: NgForm) {
    let writeProduct = new WriteProduct(f.value.name, this.selectedCategory, f.value.imagePath, this.selectedSubCategory);
    this.postProduct(writeProduct);
  }

  postProduct(product: WriteProduct) {
    this.addProductService.addProduct(product).subscribe();
  }

}
