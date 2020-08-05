import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductDetails } from '../models/Product';
import { ROUTE_CONFIG, PRODUCT_API_CONFIG } from '../models/Constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private readonly httpClient: HttpClient) { }

  getProduct(productCount: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(ROUTE_CONFIG.baseUrl + PRODUCT_API_CONFIG.TopSellingProductURL + productCount);

  }
  getProductDetail(productId: number): Observable<ProductDetails[]> {
    return this.httpClient.get<ProductDetails[]>(ROUTE_CONFIG.baseUrl + PRODUCT_API_CONFIG.ProductDetailURL+productId);
  }
addToCart(product): Observable<Product> {
  return this.httpClient.post<Product>(ROUTE_CONFIG.baseUrl + PRODUCT_API_CONFIG.AddToCart, product);
}
}
