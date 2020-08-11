import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { ROUTE_CONFIG, PRODUCT_API_CONFIG } from '../models/Constants';
import { Cart } from '../models/Cart';
import { Wishlist } from '../models/Wishlist';
import { ToastrService } from 'ngx-toastr';

const state = {
  compare: JSON.parse(sessionStorage.compareItems || '[]')
};


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private readonly httpClient: HttpClient, private toastrService: ToastrService) { }
  getProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(PRODUCT_API_CONFIG.ProductListURL);
  }
  getProductDetail(productId: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(ROUTE_CONFIG.baseUrl + PRODUCT_API_CONFIG.ProductDetailURL + productId);
  }
  addToCart(cart: Cart): Observable<any> {
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + PRODUCT_API_CONFIG.AddToCartURL, cart, { responseType: 'text' });
  }
  addToWishlist(wishlist: Wishlist): Observable<any> {
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + PRODUCT_API_CONFIG.AddToWishlistURL, wishlist, { responseType: 'text' });
  }

  addToCompare(product): any {
    const compareItem = state.compare.find(item => item.productId === product.productId);

    if ((!compareItem && state.compare && state.compare[0]
      && state.compare[0].subCategoryName === product.subCategoryName)
      || (!compareItem && (!state.compare || state.compare.length === 0))) {
      if (state.compare.length === 4) {
        this.toastrService.error('please remove any product');
        return false;
      }
      state.compare.push({
        ...product
      });
    } else {
      this.toastrService.error('unable to add to compare');
      return false;
    }
    this.toastrService.success('Product has been added to compare');
    sessionStorage.setItem('compareItems', JSON.stringify(state.compare));
    return true;
  }
}
