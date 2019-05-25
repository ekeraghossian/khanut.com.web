import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-webshop-categories',
  templateUrl: './webshop-categories.component.html',
  styleUrls: ['./webshop-categories.component.css']
})
export class WebshopCategoriesComponent implements OnInit {
  categories: Category[];
  nodes: any[];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.getCatagories();

  }

  async getCatagories() {
    await this.categoriesService.getCategories().subscribe(
      res => {
      this.nodes = res;
    });
  }


  /*
  nodes = [
    {
      id: 1,
      name: 'Electronics',
      children: [
        { id: 2, name: 'Laptop' },
        { id: 3, name: 'Tv' },
        { id: 4, name: 'Mobile phone' }
      ]
    },
    {
      id: 5,
      name: 'Outdoor',
      children: [
        { id: 6, name: 'Bycicle' },
        {
          id: 7,
          name: 'Ball',
          children: [
            { id: 8, name: 'Basketball' },
            { id: 9, name: 'Tennisball' },
            { id: 10, name: 'Football' },
          ]
        }
      ]
    }
  ];
  options = {};
*/
}
