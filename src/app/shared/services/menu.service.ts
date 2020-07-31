import { Injectable, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categories } from '../models/Category';
import { Observable } from 'rxjs';
import { ROUTE_CONFIG, HEADER_API_CONFIG } from '../models/Constants';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public screenWidth: any;
  public sidebarToggle: boolean = false;
  public menusToggle: boolean = false;
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenWidth = window.innerWidth;
  }
  constructor(private readonly httpClient: HttpClient) { }
  getMenu(): Observable<Categories[]> {
    return this.httpClient.get<Categories[]>(ROUTE_CONFIG.baseUrl + HEADER_API_CONFIG.menuCategoryURL);
  }
}