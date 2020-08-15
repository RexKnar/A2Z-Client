import { Asset } from './Asset';
import { ProductAttributes } from './ProductAttributes';
import { Stock } from './Stock';
import { Reviews } from './reviews';
export class Product {
  token: string;
  userId: string;
  productId: string;
  productName: string;
  categoryId: number;
  categoryname: string;
  subcategoryId: number;
  subCategoryName: string;
  discount: string;
  quantity: string;
  wishlist_flag: boolean;
  new_flag: boolean;
  description: string;
  assets: Asset[];
  stock: Stock[];
  Reviews: Reviews [];
}
