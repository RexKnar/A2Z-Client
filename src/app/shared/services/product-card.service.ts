import { Injectable } from '@angular/core';
import { ROUTE_CONFIG, PRODUCTCARD_API_CONFIG } from '../models/Constants';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductCardService {

  constructor(private readonly httpClient: HttpClient) { }

  getProductCard(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(ROUTE_CONFIG.baseUrl + PRODUCTCARD_API_CONFIG.productCardURL);
  }
}
