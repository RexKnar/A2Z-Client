import { Injectable } from "@angular/core";
import {  Authorization } from "../models/Authorization";
import {  CartItem } from "../models/Cart";


@Injectable()
export class LocalStorageService {
    public setAuthorizationData(auth: Authorization): void {
        sessionStorage.setItem("currentUser", JSON.stringify(auth));
    }
    public getAuthorizationData(): Authorization {
        const tokenData = JSON.parse(sessionStorage.getItem("currentUser"));
        return tokenData == null ? null : tokenData;
    }
    public setCartData(cartItems: CartItem): void {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
    public getCartData(): CartItem {
        const cartData = JSON.parse(localStorage.getItem("cartItems"));
        return cartData == null ? null : cartData;
    }
}
