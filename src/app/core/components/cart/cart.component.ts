import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CartService } from "src/app/shared/services/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  cartItems: any;
  constructor(public _cartService: CartService) {
    sessionStorage.setItem("currentUser", JSON.stringify("currentUser"));
  }
  ngOnInit(): void {
    if (!localStorage.getItem("gotCart")) {
      this.cartItems = this._cartService.getCartItems;
      this.cartItems.subscribe((data) => {
        localStorage.setItem("cartItems", JSON.stringify(data));
      });
    } else {
      this._cartService.getCartItems.subscribe((data) => {
        this.cartItems = data;
      });
    }
  }
  public get getTotal(): Observable<number> {
    return this._cartService.cartTotalAmount();
  }
  increment(product, qty = 1) {
    this._cartService.updateCartQuantity(product, qty);
  }
  decrement(product, qty = -1) {
    this._cartService.updateCartQuantity(product, qty);
  }

  public removeItem(product: any) {
    this._cartService.removeCartItem(product);
  }
}
