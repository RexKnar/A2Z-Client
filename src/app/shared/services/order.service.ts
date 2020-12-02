import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PURCHASED_DETAILS_CONFIG, ROUTE_CONFIG } from '../models/Constants';
import { MyOrder } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private readonly httpClient: HttpClient) { }

  getOrder(): Observable<any> {
    return this.httpClient.get<any>(ROUTE_CONFIG.baseUrl + PURCHASED_DETAILS_CONFIG.getUserOrdersURL);
  }

}
