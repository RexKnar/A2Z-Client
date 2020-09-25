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
    const currentUser = {
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI5OTUyMjUxMjQ0Iiwic3ViIjoiMCIsImp0aSI6IjEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiIwIiwiZXhwIjoxNjAxNTQzMzg3LCJpc3MiOiJFZHdpbiIsImF1ZCI6IkVkd2luIn0.JSpbGFBepejdWnOtBUWOpDrVJ8rXhI8Sy3HW1p0zDXM",
    };
    sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
  }
  ngOnInit(): void {
    if (!localStorage.getItem("gotCart")) {
      this._cartService.getCartItems.subscribe((data) => {
        this.cartItems = data;
        console.log(this.cartItems.length);
        localStorage.setItem("cartItems", JSON.stringify(data));
      });
    } else {
      this._cartService.getCartItems.subscribe((data) => {
        this.cartItems = data;
        console.log(this.cartItems.length);
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
