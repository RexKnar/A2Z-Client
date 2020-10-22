import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { GetProductList, Product, ProductDetails } from "../models/Product";
import { ROUTE_CONFIG, PRODUCT_API_CONFIG } from "../models/Constants";
import { Ratings } from "../models/Ratings";
import { Cart } from "../models/Cart";
import { Wishlist } from "../models/Wishlist";
import { ToastrService } from "ngx-toastr";

const state = {
  compare: JSON.parse(sessionStorage.compareItems || "[]"),
  cart: JSON.parse(sessionStorage.cartItems || "[]")
};

@Injectable({
  providedIn: "root"
})
export class ProductService {
  public Currency = { name: "Rupee", currency: "INR", price: 1 };
  constructor(private readonly httpClient: HttpClient, private toastrService: ToastrService) { }

  getProduct(getProductList: GetProductList): Observable<any> {
    return this.httpClient.post<any>(ROUTE_CONFIG.baseUrl + PRODUCT_API_CONFIG.ProductListURL, getProductList);
  }
  getProductDetail(productId: number): Observable<ProductDetails[]> {
    return this.httpClient.get<ProductDetails[]>(ROUTE_CONFIG.baseUrl + PRODUCT_API_CONFIG.ProductDetailsURL + productId);
  }
  addReview(review: Ratings): Observable<any> {
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + PRODUCT_API_CONFIG.reviewsRatingURL, review, { responseType: "text" });
  }
  addToCart(cart: Cart): Observable<any> {
    // state.cartList.push({
    //   ...cart
    // });
    // localStorage.setItem("cartItems", JSON.stringify(state.cartList));
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + PRODUCT_API_CONFIG.AddToCartURL, cart, { responseType: "text" });
  }
  addToWishlist(wishlist: Wishlist): Observable<any> {
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + PRODUCT_API_CONFIG.AddToWishlistURL, wishlist, { responseType: "text" });
  }
  addToCompare(product): any {
    const compareItem = state.compare.find(item => item.productId === product.productId);

    if ((!compareItem && state.compare && state.compare[0]
      && state.compare[0].subCategoryName === product.subCategoryName)
      || (!compareItem && (!state.compare || state.compare.length === 0))) {
      if (state.compare.length === 4) {
        this.toastrService.error("please remove any product");
        return false;
      }
      state.compare.push({
        ...product
      });
    } else {
      this.toastrService.error("unable to add to compare");
      return false;
    }
    this.toastrService.success("Product has been added to compare");
    sessionStorage.setItem("compareItems", JSON.stringify(state.compare));
    return true;
  }
  public updateCartQuantity(product: Product, quantity: number): Product | boolean {
    return state.cart.find((items, index) => {
      if (items.id === product.categoryId) {
        const qty = state.cart[index].quantity + quantity;
        // const stock = this.calculateStockCounts(state.cart[index], quantity)
        const stock = 1;
        if (qty !== 0 && stock) {
          state.cart[index].quantity = qty;
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cart));
        return true;
      }
    });
  }
}
