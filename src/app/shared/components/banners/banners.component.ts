import { Component, OnInit, Input,Output } from '@angular/core';
import { Banner } from '../../models/banner';
import { BannerService } from './banner.service';
@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit {
 
  @Input() banner = new Banner;
  @Output()
  public persondata=[];
 constructor(private myservice:BannerService) {}
ngOnInit(): void {
    this.myservice.getData().subscribe((data)=>{
      this.persondata=Array.from(Object.keys(data),k=>data[k]);
      console.log(this.persondata);
    });
  }

}
