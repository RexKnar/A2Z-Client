import { Banner } from './../../shared/models/banner';
import { Component, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bannerData = new Banner();

  constructor() {

   }

  ngOnInit() {
  this.bannerData.discountText = 'Save 30%';
  this.bannerData.discountCategory = 'Men';
  this.bannerData.imgUrl = 'abc';
  this.bannerData.navUrl = 'abc';
  }

}
