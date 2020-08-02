import { Component, OnInit, Input } from '@angular/core';
import { Banner } from '../../models/banner';
import { BannerService } from '../services/banner.service';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit {
  @Input() banner: Banner;
  constructor() { }
  ngOnInit(): void {

  }
}

