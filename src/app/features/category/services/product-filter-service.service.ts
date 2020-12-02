import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROUTE_CONFIG } from 'src/app/shared/models/Constants';
import { CATEGORY_API_CONFIG } from '../models/contants';
import { FilterSearchModel } from '../models/filter-search.model';
import { Product } from 'src/app/shared/models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductFilterService {
  constructor(private readonly httpClient: HttpClient) {}

  FilterSearchProduct(searchInput: FilterSearchModel): Observable<Product[]> {
    return this.httpClient.post<Product[]>(ROUTE_CONFIG.baseUrl + CATEGORY_API_CONFIG.GetProductFilter, searchInput);
  }
}
