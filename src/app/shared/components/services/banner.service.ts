import { Injectable } from '@angular/core';
import { Banner } from '../../models/banner';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BANNER_API_CONFIG, ROUTE_CONFIG } from '../../models/Constants';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  constructor(private readonly httpClient: HttpClient) { }
  getAllBanner(): Observable<Banner[]> {
    return this.httpClient.get<Banner[]>(ROUTE_CONFIG.baseUrl + BANNER_API_CONFIG.BannerURL);
  }
}
