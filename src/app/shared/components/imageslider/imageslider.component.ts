import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Slider, HomeSlider } from '../../models/slider';

@Component({
  selector: 'app-imageslider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.scss']
})
export class ImagesliderComponent implements OnInit {
  @Input() slider = new Slider();
//  
public HomeSliderConfig: any = HomeSlider;
  constructor() {
    
   }

  ngOnInit(): void {

  }
}