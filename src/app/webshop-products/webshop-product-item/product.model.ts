export class Product{
    id: number;
    name: string;
    description: string;
    category: string;
    subcategory: string;
    imagePath: string;

    constructor(id: number, name: string, description: string, category: string, subcategory: string,
        imagePath: string) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.category = category;
            this.subcategory = subcategory;
            this.imagePath = imagePath;
    }
}