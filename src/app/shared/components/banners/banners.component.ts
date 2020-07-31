import { Component, OnInit } from '@angular/core';
import { Banner } from '../../models/banner';
import { BannerService } from './banner.service';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit {
 
  ban:Banner [];
 
   
  constructor(private readonly _bannerservice: BannerService) {}
ngOnInit(): void {
   this.getAllBanner();
  }
public getAllBanner():void{
  this._bannerservice.getAllBanner().subscribe((data) =>{
    //this.ban=data;
    console.log(data);
   
    
  });
}
}
