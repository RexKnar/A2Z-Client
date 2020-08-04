import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/shared/models/banner';
import { BannerService } from 'src/app/shared/services/banner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _bannerService: BannerService) {}

  topBannerData: Observable<Banner[]>;
  bottomBannerData: Observable<Banner[]>;

  ngOnInit() {
    this.topBannerData = this._bannerService.getBanner('banner1');
    this.bottomBannerData = this._bannerService.getBanner('banner2');
  }


}
