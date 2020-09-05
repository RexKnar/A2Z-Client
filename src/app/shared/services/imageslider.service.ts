import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Slider } from '../models/slider';
import { ROUTE_CONFIG, IMAGESLIDER_API_CONFIG } from '../models/Constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesliderService {

  constructor(private readonly httpClient: HttpClient) { }
  
  getimageslider(): Observable<Slider[]> 
  {
    return this.httpClient.get<Slider[]>(ROUTE_CONFIG.baseUrl + IMAGESLIDER_API_CONFIG.homeSliderURL);
  }
}
