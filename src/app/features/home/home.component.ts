import { Component, OnInit, Output } from '@angular/core';
import { Banner } from 'src/app/shared/models/banner';
import { BannerService } from 'src/app/shared/components/services/banner.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() banner: Banner;
  topBannerData:Banner[];
  bottomBannerData: Banner[];
  constructor(private readonly _bannerservice: BannerService) { }
 ngOnInit() {
    this.topBannerData= this.getBanner('banner1')
    this.bottomBannerData=this.getBanner('banner2');
  }
  public getBanner(position:string): any {
    return this._bannerservice.getBanner(position);
    
  }
  
}
