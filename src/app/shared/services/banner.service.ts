import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Banner } from '../models/banner';
import { ROUTE_CONFIG, BANNER_API_CONFIG } from '../models/Constants';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private readonly httpClient: HttpClient) { }

  getBanner(position: string): Observable<Banner[]> {
    return this.httpClient.get<Banner[]>(ROUTE_CONFIG.baseUrl + BANNER_API_CONFIG.BannerURL+position);
  }

}
