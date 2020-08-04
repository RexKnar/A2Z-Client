import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Slider } from '../../models/slider';
import { HomeSlider } from '../../data/slider-option';

@Component({
  selector: 'app-imageslider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.scss']
})
export class ImagesliderComponent implements OnInit {
  @Input() slider = new Slider();

public HomeSliderConfig: any = HomeSlider;
  constructor() { }
  ngOnInit(): void {

  }
}