import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { FOOTER_API_CONFIG } from "../../models/Constants";
import { categoryName, Subscription } from '../../models/footer.model';

@Injectable({
  providedIn: "root",
})
export class FooterService {
  constructor(private readonly httpClient: HttpClient) {}

  getAllCategories(): Observable<categoryName []> {
    return this.httpClient.get<categoryName []>(FOOTER_API_CONFIG.CategoryURL);
  }

  addSubscriptions(subscriptions: Subscription): Observable<Subscription> {
    return this.httpClient.post<Subscription>(FOOTER_API_CONFIG.SubscriptionURL, subscriptions);
  }
}
