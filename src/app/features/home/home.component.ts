import { Slider } from './../../shared/models/slider';


import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/shared/models/Banner';
import { BannerService } from 'src/app/shared/services/banner.service';
import { SliderService } from 'src/app/shared/services/slider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  



  
  constructor(private _bannerService: BannerService,
    private _sliderService: SliderService
    ) {}
    slider1Data: Observable<Slider[]>;
  

 
  topBannerData: Observable<Banner[]>;
  bottomBannerData: Observable<Banner[]>;

  ngOnInit() {
    this.topBannerData = this._bannerService.getBanner('banner1');
    this.bottomBannerData = this._bannerService.getBanner('banner2');
  
  this.slider1Data = this._sliderService.getSlider('slider1');
  
  }
}