import { productAttributes } from './Product-attributes';

export class Product {
    productId:string;
    productName:string;
    categoryname:string;
    subCategoryName:string;
    price:string;
    quantity:string;
    description:string;
    productAttributes: productAttributes[];
}
