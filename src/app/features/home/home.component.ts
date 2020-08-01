import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Banner } from 'src/app/shared/models/banner';
import { BannerService } from 'src/app/shared/components/services/banner.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  outputData: Banner[];
  topBannerData: Banner[]=[];
  bottomBannerData: Banner[]=[];
  constructor(private readonly _bannerservice: BannerService) { }
  
  ngOnInit() {
   this.topBannerData= this.getBanner('banner1');
   this.bottomBannerData=this.getBanner('banner1');
    console.log(this.topBannerData);
  }

  public getBanner(position:string): any {
    let output:Banner[];
    this._bannerservice.getBanner(position).subscribe((data:any) => { 
      this.outputData= data;
      return this.outputData;
      console.log(output);
    });
    
    
  }
  
}
