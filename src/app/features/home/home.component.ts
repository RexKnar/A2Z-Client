import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/shared/models/banner';
import { BannerService } from 'src/app/shared/components/services/banner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerData: Banner[];
  constructor(private readonly _bannerservice: BannerService) { }
  ngOnInit() {
    this.getAllBanner();
  }
  public getAllBanner(): void {
    this._bannerservice.getAllBanner().subscribe((data) => {
      this.bannerData = data;
    });
  }
}
