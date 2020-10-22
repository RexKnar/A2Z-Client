import { Stock } from "./Stock";
import { ProductAttributes } from "./ProductAttributes";
import { Ratings } from "./Ratings";

export class Product {
  productId: string;
  productName: string;
  categoryId: number;
  categoryName: string;
  subCategoryId: number;
  subCategoryName: string;
  discount: number;
  rating: number;
  quantity: string;
  wishlistFlag: boolean;
  newFlag: boolean;
  stocks: Stock[];
}
export class ProductList {
  products: Product[];
  totalCount: number;
}

export class ProductDetails {
  productId: string;
  productName: string;
  categoryId: number;
  categoryname: string;
  subcategoryId: number;
  subCategoryName: string;
  discount: number;
  rating: number;
  description: string;
  wishListFlag: boolean;
  new_flag: boolean;
  productAttributes: ProductAttributes[];
  reviews: Ratings[];
  stock: Stock[];

}
export class GetProductList {
  type: string;
  value: string;
}
