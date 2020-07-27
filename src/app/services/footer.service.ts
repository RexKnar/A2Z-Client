import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoriesModel } from '../models/footer/footer.model';
import { Observable } from 'rxjs';
import { ROUTE_CONFIG } from '../shared/models/Constants';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  constructor(private readonly httpClient: HttpClient) {
  }
  getAllCategories(): Observable<CategoriesModel[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = ROUTE_CONFIG. Kumraria2zURL + `/Categories`;
    return this.httpClient.get<CategoriesModel[]>(apiUrl, { headers });
  }
}
