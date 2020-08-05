import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { ROUTE_CONFIG, PRODUCT_API_CONFIG } from '../models/Constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public Currency = { name: 'Dollar', currency: 'USD', price: 1 }
  
  constructor(private readonly httpClient: HttpClient) { }

  getProduct(productCount: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(ROUTE_CONFIG.baseUrl + PRODUCT_API_CONFIG.TopSellingProductURL + productCount);

  }
  

}
