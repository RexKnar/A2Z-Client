import { Stock } from './Stock';

export class Product {
  productId: string;
  productName: string;
  categoryId: number;
  categoryName: string;
  subCategoryId: number;
  subCategoryName: string;
  discount: string;
  quantity: string;
  wishlistFlag: boolean;
  newFlag: boolean;
  description: string;
  stocks: Stock[];
}

export class ProductDetails {
   
    productId: string;
    productName: string;
    categoryId: number;
    categoryname: string;
    subcategoryId: number;
    subCategoryName: string;
    discount: number;
    description: string;
    wishListFlag: boolean;
    new_flag: boolean;
    stock: Stock[];
   
}

