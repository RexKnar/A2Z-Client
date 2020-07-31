export class ProductCard {
    productId:string;
    productName:string;
    categoryname:string;
    subCategoryName:string;
    price:string;
    quantity:string;
    description:string;
    productAttributes: productAttributes[] = [];
    constructor() {

    }
}
export class productAttributes{
    attributeName:string;
    value:string;
}
    