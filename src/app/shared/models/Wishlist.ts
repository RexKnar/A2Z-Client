export class Wishlist {
  userId: number;
  stockId: number;
  quantity: number;
}

export class WishlistItem {
  wishListId: number;
  productId: number;
  productName: string;
  stockId: number;
  price:number;
  discount:number;
  imageUrl:number;
  quantity: number;
}
