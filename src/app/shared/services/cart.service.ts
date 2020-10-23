import { HttpClient } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";
import { Cart, CartItem } from "../models/Cart";
import { CART_API_CONFIG, ROUTE_CONFIG } from "../models/Constants";
import { LocalStorageService } from "../utility/LocalStorageService";

const state = {
  compare: JSON.parse(sessionStorage.getItem("compareItems") || "[]"),
  cart: JSON.parse(localStorage.getItem("cartItems") || "[]"),
};

@Injectable({
  providedIn: "root",
})
export class CartService {
  constructor(
    private readonly injector: Injector,
    private toastrService: ToastrService,
    private readonly httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) { }
  public Currency = { name: "Rupee", currency: "INR", price: 1 };
  public OpenCart = false;
  public get getCartItems(): Observable<CartItem[]> {
    if (
      !localStorage.getItem("cartItems") &&
      sessionStorage.getItem("currentUser") &&
      !sessionStorage.getItem("gotCart")
    ) {
      const userCartData = this.httpClient.get<CartItem[]>(
        ROUTE_CONFIG.baseUrl + CART_API_CONFIG.GetCartItemsURL
      );
      return userCartData as Observable<CartItem[]>;
    } else {
      const itemsStream = new Observable((observer) => {
        observer.next(state.cart);
        observer.complete();
      });
      sessionStorage.setItem("gotCart", "true");
      return itemsStream as Observable<CartItem[]>;
    }
  }
  public get cartItems(): Observable<CartItem[]> {
    const itemsStream = new Observable((observer) => {
      observer.next(state.cart);
      observer.complete();
    });
    return itemsStream as Observable<CartItem[]>;
  }
  public cartTotalAmount(): Observable<number> {
    return this.getCartItems.pipe(
      map((product: CartItem[]) => {
        return product.reduce((prev, curr: CartItem) => {
          let price = curr.price;
          if (curr.discount) {
            price = curr.price - (curr.price * curr.discount) / 100;
          }
          return (prev + price * curr.quantity) * this.Currency.price;
        }, 0);
      })
    );
  }
  public addToCart(product): any {
    const cartItem = state.cart.find((item) => item.stockId === product.stockId);
    console.log(product);
    const qty = product.quantity ? product.quantity : 1;
    const items = cartItem ? cartItem : product;
    const stock = this.calculateStockCounts(items, qty);
    if (!stock) {
      return false;
    }
    if (cartItem) {
      cartItem.quantity += qty;
      state.cart.find((items, index) => {
        if (items.stockId === product.stockId) {
          const qty = state.cart[index].quantity + 1;
          const stock = this.calculateStockCounts(state.cart[index], 1);
          if (qty !== 0 && stock) {
            state.cart[index].quantity = qty;
          }
          if (this.localStorageService.getAuthorizationData()) {
            const newCartItem = [{ stockId: product.stockId, quantity: qty }];
            this.httpClient
              .put(
                ROUTE_CONFIG.baseUrl + CART_API_CONFIG.UpdateCartItemsURL,
                newCartItem
              )
              .subscribe((val) => { });
          }
        }
      });
    } else {
      state.cart.push({
        ...product
      });
      if (this.localStorageService.getAuthorizationData()) {
        const newCartItem: Cart[] = [{ stockId: product.stockId, quantity: qty }];
        console.log(newCartItem);
        this.httpClient
          .post(
            ROUTE_CONFIG.baseUrl + CART_API_CONFIG.AddToCartURL,
            newCartItem
          )
          .subscribe((val) => { });
      }
    }
    this.localStorageService.setCartData(state.cart);
    return true;
  }
  public updateCartQuantity(
    product: CartItem,
    quantity: number
  ): CartItem | boolean {
    return state.cart.find((items, index) => {
      if (items.stockId === product.stockId) {
        const qty = state.cart[index].quantity + quantity;
        const stock = this.calculateStockCounts(state.cart[index], quantity);
        if (qty !== 0 && stock) {
          state.cart[index].quantity = qty;
        }
        if (this.localStorageService.getAuthorizationData()) {
          const newCartItem = [{ stockId: product.stockId, quantity: qty }];
          this.httpClient
            .put(
              ROUTE_CONFIG.baseUrl + CART_API_CONFIG.UpdateCartItemsURL,
              newCartItem
            )
            .subscribe((val) => { });
        }
        this.localStorageService.setCartData(state.cart);
        return true;
      }
    });
  }
  public calculateStockCounts(product, quantity) {
    const qty = product.quantity + quantity;
    const stock = product.stockQuantity;
    if (stock < qty || stock == 0) {
      this.toastrService.error(
        "You can not add more items than available. In stock " +
        stock +
        " items."
      );
      return false;
    }
    return true;
  }
  public removeCartItem(product: CartItem): any {
    const index = state.cart.indexOf(product);
    state.cart.splice(index, 1);
    if (this.localStorageService.getAuthorizationData()) {
      this.httpClient
        .delete(
          ROUTE_CONFIG.baseUrl +
          CART_API_CONFIG.RemoveCartItemsURL +
          "?stockId=" +
          product.stockId
        )
        .subscribe((val) => { });
    }
    this.localStorageService.setCartData(state.cart);
    return true;
  }
}
