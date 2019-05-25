import { WriteCategory } from "./writeCategory.model";

export class WriteSubCategory {
    id: number;
    name: string;
    category: WriteCategory

    constructor(id: number, name: string, category: WriteCategory) {
        this.id = id;
        this.name = name;
        this.category = category;
    }
}