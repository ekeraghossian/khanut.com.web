import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category.model';
import { TreeNode, ITreeOptions } from 'angular-tree-component';

@Component({
  selector: 'app-webshop-categories',
  templateUrl: './webshop-categories.component.html',
  styleUrls: ['./webshop-categories.component.css']
})
export class WebshopCategoriesComponent implements OnInit {
  nodes: any[] = [];
  /* options = {
    getChildren: (node:TreeNode) => {
        this.getSubCatagories(node.id);
    }
  } */
  options: ITreeOptions = {
    getChildren: this.getSubCatagories.bind(this)
  };

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.getCatagories();
    
  }

  asyncChildren = [];

  async getCatagories() {
    await this.categoriesService.getCategories().subscribe(
      res => {
        console.log(res);
        this.addHasChildren(res);
        console.log(res);
      this.nodes = res;
    });
  }

  newNodes;
  async getSubCatagories(node: any) {
    await this.categoriesService.getSubCategories(node.id).subscribe(
      res => {
      console.log(res);
      this.asyncChildren = res;
      this.newNodes = this.asyncChildren.map((c) => Object.assign({}, c));
    });
    
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(this.newNodes), 1000);
      });
  }

  addHasChildren(categories: Category[]) {
    for(let cat of categories) {
      cat.hasChildren = true;
    }
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
