import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private finaldata=[];
  private apiurl="http://kumaria2z-001-site1.ftempurl.com/api/banners";
constructor(private http:HttpClient) { }
getData(){
  return this.http.get(this.apiurl);
}
}
