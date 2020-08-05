import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import {
  FOOTER_API_CONFIG,
  ROUTE_CONFIG,
  Apiresponce,
} from "../models/Constants";
import { Category } from "../models/Category";
import { Subscription } from "../models/Subscription";

@Injectable({
  providedIn: "root",
})
export class FooterService {
  constructor(private readonly httpClient: HttpClient) {}

  getAllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(
      ROUTE_CONFIG.baseUrl + FOOTER_API_CONFIG.topSellingCategoryURL
    );
  }

  addSubscriptions(subscription: Subscription): Observable<any> {
    return this.httpClient.post(
      ROUTE_CONFIG.baseUrl + FOOTER_API_CONFIG.subscriptionURL,
      subscription,
      { responseType: "text" }
    );
  }
}
