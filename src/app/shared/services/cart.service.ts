import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../models/Cart';
import { CART_API_CONFIG, ROUTE_CONFIG } from '../models/Constants';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private readonly httpClient: HttpClient) {}
  public Currency = { name: 'Rupee', currency: 'INR', price: 1 };
  public OpenCart = false;

  addToCart(cart: Cart[]): Observable<any> {
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + CART_API_CONFIG.AddToCartURL, cart, { responseType: 'text' });
  }

  getCart(): Observable<any> {
    return this.httpClient.get<any>(ROUTE_CONFIG.baseUrl + CART_API_CONFIG.GetCartItemsURL);
  }

  updateCartItems(updateCart: any): Observable<any> {
    return this.httpClient.put(ROUTE_CONFIG.baseUrl + CART_API_CONFIG.UpdateCartItemsURL, updateCart, {
      responseType: 'text',
    });
  }

  deleteCartItems(id): Observable<any> {
    return this.httpClient.delete<any>(ROUTE_CONFIG.baseUrl + CART_API_CONFIG.RemoveCartItemsURL + `?stockId=${id}`);
  }
}
