import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/shared/models/banner';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
bannerData = new Banner();

constructor() {} 
ngOnInit():void {
    this.bannerData.discountText = '';
    this.bannerData.discountCategory = '';
    this.bannerData.imgUrl = '';
    this.bannerData.navUrl = '';
 
   
}

}
