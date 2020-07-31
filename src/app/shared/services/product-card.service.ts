import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/http';
import { ROUTE_CONFIG, PRODUCTCARD_API_CONFIG } from '../models/Constants';
import { Observable } from 'rxjs';
import { ProductCard } from '../models/ProductCard';

@Injectable({
  providedIn: 'root'
})
export class ProductCardService {

  constructor(private readonly httpClient: HttpClient) { }

  getProductCard(): Observable<ProductCard[]> {
    return this.httpClient.get<ProductCard[]>(ROUTE_CONFIG.baseUrl + PRODUCTCARD_API_CONFIG.productCardURL);
  }
}
