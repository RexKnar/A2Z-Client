import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/shared/models/Cart';

import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[];

    constructor(public _cartService: CartService) {
      // let currentUser={access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI5OTUyMjUxMjQ0Iiwic3ViIjoiMCIsImp0aSI6IjEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiIwIiwiZXhwIjoxNjAxMzYwODA2LCJpc3MiOiJFZHdpbiIsImF1ZCI6IkVkd2luIn0.VD6dFnSwftx_Dlcp7824No7d-ijPnODRc7QDtSOUlP4"};
      // sessionStorage.setItem("currentUser",JSON.stringify(currentUser));
     
        
      
     
    }
  ngOnInit(): void {
    console.log(this._cartService.getCartItems());
    // this._cartService.getCartItems().subscribe((data) => {
    //   console.log(data);
    //   this.cartItems=data;
    //   localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    //   });
    // localStorage.setItem("userId", JSON.stringify(this.cartItems));
    // this.cartItems = this._cartService.getCartItems;
    
  }
  
  public get getTotal(): Observable<number> {
    return this._cartService.cartTotalAmount();
  }

 // Increament
 increment(product, qty = 1) {
  //  alert();
  this._cartService.updateCartQuantity(product, qty);
}

// Decrement
decrement(product, qty = -1) {
  this._cartService.updateCartQuantity(product, qty);
}

public removeItem(product: any) {
  // this._cartService.removeCartItem(product);
}
}
