import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ROUTE_CONFIG } from "../../models/Constants";
import { Category, subscribe } from "../../models/footer.model";

@Injectable({
  providedIn: "root",
})
export class FooterService {
  constructor(private readonly httpClient: HttpClient) {}

  getAllCategories(): Observable<Category[]> {
    const apiUrl = ROUTE_CONFIG.Kumraria2zURL + `/Categories`;
    return this.httpClient.get<Category[]>(apiUrl);
  }

  addSubscriptions(subscriptions: subscribe): Observable<subscribe> {
    const apiUrl = ROUTE_CONFIG.Kumraria2zURL + `/Subscriptions`;
    return this.httpClient.post<subscribe>(apiUrl, subscriptions);
  }
}
