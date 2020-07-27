import { Component, OnInit } from '@angular/core';
import { Databind } from 'src/app/shared/models/databind';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
bannerData = new Databind();

  constructor() {
 
   }

   ngOnInit() {
    this.bannerData.discountText = 'Save 30%';
    this.bannerData.discountTexts = 'Save 60%';
    this.bannerData.discountCategory = 'Men';
    this.bannerData.discountCategorys = 'Women';
    this.bannerData.imgUrl = './assets/images/collection/fashion/men.jpg';
    this.bannerData.imagUrl = './assets/images/collection/fashion/women.jpg';
    this.bannerData.navUrl = './shop/collection/left/sidebar';
  }

}
