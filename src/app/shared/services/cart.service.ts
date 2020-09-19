import { HttpClient } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { map, startWith, delay } from 'rxjs/operators';
import { ToastrService } from "ngx-toastr";
import { CartItem } from "../models/Cart";
import { CART_API_CONFIG, ROUTE_CONFIG } from "../models/Constants";
import { ApiService } from "./api.service";
const state = {
  compare: JSON.parse(sessionStorage.compareItems || "[]"),
  cart: JSON.parse(localStorage.cartItems || "[]")
};

@Injectable({
  providedIn: "root"
})
export class CartService extends ApiService {

  constructor(private readonly injector: Injector,
              private toastrService: ToastrService) {
    super(injector);

  }
  public Currency = { name: "Rupee", currency: "INR", price: 1 }; // Default Currency
  public OpenCart = false;

  getCartItems(): Observable<CartItem[]> {
    if(sessionStorage.getItem("currentUser"))
      {
    const requestApiUrl = ROUTE_CONFIG.baseUrl + CART_API_CONFIG.GetCartItemsURL;
    return this.doGet(requestApiUrl, true);
      }
      else{
        const itemsStream = new Observable(observer => {
          observer.next(state.cart);
          observer.complete();
        });
        return <Observable<CartItem[]>>itemsStream;
      }
  }
 // Get Cart Items
 public get cartItems(): Observable<CartItem[]> {
  const itemsStream = new Observable(observer => {
    observer.next(state.cart);
    observer.complete();
  });
  return <Observable<CartItem[]>>itemsStream;

}
 // Total amount
 public cartTotalAmount(): Observable<number> {
  return this.cartItems.pipe(map((product: CartItem[]) => {
    return product.reduce((prev, curr: CartItem) => {
      let price = curr.price;
      if (curr.discount) {
        price = curr.price - (curr.price * curr.discount / 100);
      }
      return (prev + price * curr.discount) * this.Currency.price;
    }, 0);
  }));
}
// Add to Cart
public addToCart(product): any {
  const cartItem = state.cart.find(item => item.id === product.id);
  const qty = product.quantity ? product.quantity : 1;
  const items = cartItem ? cartItem : product;
  const stock = this.calculateStockCounts(items, qty);
  
  if(!stock) return false

  if (cartItem) {
      cartItem.quantity += qty    
  } else {
    state.cart.push({
      ...product,
      quantity: qty
    })
  }

  this.OpenCart = true; // If we use cart variation modal
  localStorage.setItem("cartItems", JSON.stringify(state.cart));
  return true;
}
   // Update Cart Quantity
   public updateCartQuantity(product: CartItem, quantity: number): CartItem | boolean {
    //  console.log(state.cart);
    //  console.log(localStorage.getItem("cartItems"));
    return state.cart.find((items, index) => {
      if (items.stockId === product.stockId) {
        
        const qty = state.cart[index].quantity + quantity;
        const stock = this.calculateStockCounts(state.cart[index], quantity);
        if (qty !== 0 && stock) {
          state.cart[index].quantity = qty;
        }
        console.log(state.cart[index]);
        localStorage.setItem("cartItems", JSON.stringify(state.cart));

        return true;
      }
    });
  }

    // Calculate Stock Counts
  public calculateStockCounts(product, quantity) {
    const qty = product.quantity + quantity;
    const stock = product.stockQuantity;
    if (stock < qty || stock == 0) {
      this.toastrService.error("You can not add more items than available. In stock "+ stock +" items.");
      return false;
    }
    return true;
  }

  // Remove Cart items
  public removeCartItem(product: CartItem): any {
    const index = state.cart.indexOf(product);
    state.cart.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(state.cart));
    return true;
  }

 


}
