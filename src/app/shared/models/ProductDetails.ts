import { ProductAttributes } from './ProductAttributes';

export class productDetails {
    productId:string;
    productName:string;
    categoryId:number;
    categoryname:string;
    subcategoryId:number;
    subCategoryName:string;
    price:string;
    quantity:string;
    description:string;
    imgUrl: string;
    productAttributes: ProductAttributes[];
}


