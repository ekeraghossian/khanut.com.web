import { WriteCategory } from "./writeCategory.model";
import { WriteSubCategory } from "./writeSubCategory.model";

export class WriteProduct {
    id: number;
    name: string;
    category: WriteCategory;
    imagePath: string;
    subCategory: WriteSubCategory;

    constructor(name: string, category: WriteCategory, imagePath: string, subCategory: WriteSubCategory) {
        this.name = name;
        this.category = category;
        this.imagePath = imagePath;
        this.subCategory = subCategory;
    }
}