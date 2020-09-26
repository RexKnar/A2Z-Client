export class Cart {
  stockId: number;
  quantity: number;
}
export class CartItem {
  stockId: number;
  productName: string;
  imageUrl: string;
  quantity: number;
  stockQuantity: number;
  discount: number;
  price: number;
  activeStatus: boolean;
}
