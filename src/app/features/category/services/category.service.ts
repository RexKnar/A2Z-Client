import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/category.model';
import { HttpClient } from '@angular/common/http';
import { ROUTE_CONFIG } from 'src/app/shared/models/Constants';
import { CATEGORY_API_CONFIG } from '../models/contants';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private readonly httpClient: HttpClient) {}

  getAllCategories(): Observable<CategoryModel[]> {
    return this.httpClient.get<CategoryModel[]>(ROUTE_CONFIG.baseUrl + CATEGORY_API_CONFIG.CategoryURL);
  }
}
