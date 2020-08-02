import { BannerService } from 'src/app/shared/components/services/banner.service';
import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/shared/models/banner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _bannerService: BannerService) {}

  topBannerData: Banner[];
  bottomBannerData: Banner[];

  ngOnInit() {
  //  this.topBannerData = this._bannerService.ge
  }

}
