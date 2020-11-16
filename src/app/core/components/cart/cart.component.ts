import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";
import { CartService } from "src/app/shared/services/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  cartItems: any;
  isCheckout: string = "";
  constructor(public _cartService: CartService,
    private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    // this.isCheckout = this.route.snapshot.queryParamMap.get('type');
    // if (!localStorage.getItem("gotCart")) {
    //   this._cartService.getCartItems.subscribe((data) => {
    //     this.cartItems = data;
    //     console.log(this.cartItems.length);
    //     localStorage.setItem("cartItems", JSON.stringify(data));
    //   });
    // } else {
    //   this._cartService.getCartItems.subscribe((data) => {
    //     this.cartItems = data;
    //     console.log(this.cartItems.length);
    //   });
    // }
    // this._cartService.getCart().subscribe((data) => {
    //   this.cartItems = data;
    //   console.log(this.cartItems.length);
    // });
    this.getAllCartItems();
  }

  getAllCartItems() {
    this._cartService.getCart().subscribe((data: any) => {
      this.cartItems = data;
      console.log(this.cartItems);
    });
  }
}
  // public get getTotal(): Observable<number> {
  //   return this._cartService.cartTotalAmount();
  // }

  // increment(product, qty = 1) {
  //   this._cartService.updateCartQuantity(product, qty);

  // }

  // decrement(product, qty = -1) {
  //   this._cartService.updateCartQuantity(product, qty);
  // }

  // public removeItem(product: any) {
  //   this._cartService.removeCartItem(product);
  // }

