export class Category {
    id: String;
    name: string;
    hasChildren: boolean;
    children: any;

    constructor(id: String, name: string) {
        this.id = id;
        this.name = name;
        this.hasChildren = true;
        this.children = null;
    }
}