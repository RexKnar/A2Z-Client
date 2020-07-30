import { Slider } from './../../shared/models/slider';
import { Component, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sliderData = new Slider();

  constructor() {

   }

  ngOnInit() {
  this.sliderData.welcomeText = 'Welcome';
  this.sliderData.welcomeText = 'Welcome';
  this.sliderData.productCategory = 'Men';
  this.sliderData.productCategory = 'Women';
  this.sliderData.imgUrl = './assets/images/slider/1.jpg';
  this.sliderData.imgUrl = './assets/images/slider/2.jpg';
  
  }

}
