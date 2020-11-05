import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-checkout-order',
  templateUrl: './checkout-order.component.html',
  styleUrls: ['./checkout-order.component.scss']
})
export class CheckoutOrderComponent implements OnInit {

  constructor(public _cartService: CartService,) { }

  ngOnInit(): void {
     
  }
  public get getTotal(): Observable<number> {
    return this._cartService.cartTotalAmount();
  }
}
