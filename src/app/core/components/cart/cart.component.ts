import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  price: number = 0;
  cartItems: any = [];
  isCheckout: string = '';
  constructor(public _cartService: CartService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.getAllCartItems();
  }

  getAllCartItems() {
    this._cartService.getCart().subscribe((data: any) => {
      this.cartItems = data;
      console.log(this.cartItems);
    });
  }

  public get getTotal(): number {
    return this.cartTotalAmount();
  }

  increment(product, qty = 1) {
    if (product.stockQuantity == product.quantity) {
      return alert('No Stock Found');
    } else {
      product.quantity++;
      this.price += product.price;
      this.updateCartDetails({
        stockId: product.stockId,
        quantity: product.quantity,
      });
    }
  }

  decrement(product, qty = -1) {
    if (product.quantity <= 1) {
      return alert('Minimum quantity Reached');
    }
    product.quantity--;
    this.price -= product.price;
    this.updateCartDetails({
      stockId: product.stockId,
      quantity: product.quantity,
    });
  }

  public removeItem(product: any, index) {
    this.cartItems.splice(index, 1);
    this.deleteCartDetails(product.stockId);
  }

  public cartTotalAmount() {
    this.price = 0;
    for (let p of this.cartItems) {
      this.price += p.price * p.quantity;
    }
    return this.price;
  }

  public updateCartDetails(cart): void {
    const cartDetails = [];
    cartDetails.push(cart);
    console.log(cartDetails);
    this._cartService.updateCartItems(cartDetails).subscribe((data) => {
      this.getAllCartItems();
    });
  }

  public deleteCartDetails(id): void {
    this._cartService.deleteCartItems(id).subscribe((data) => {
      this.getAllCartItems();
    });
  }
}
