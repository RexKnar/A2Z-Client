import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Slider } from '../models/slider';
import { ROUTE_CONFIG, SLIDER_API_CONFIG } from '../models/Constants';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  constructor(private readonly httpClient: HttpClient) { }

  getSlider(position: string): Observable<Slider[]> {
    return this.httpClient.get<Slider[]>(ROUTE_CONFIG.baseUrl + SLIDER_API_CONFIG.SliderURL + position);
  }

}
