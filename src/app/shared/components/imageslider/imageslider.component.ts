import { Component, OnInit } from '@angular/core';
import { HomeSlider } from '../../models/slider';
import { ImagesliderService } from '../../services/imageslider.service';

@Component({
  selector: 'app-imageslider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.scss']
})
export class ImagesliderComponent implements OnInit {
  public HomeSliderConfig: any = HomeSlider;

  
  homeslider: any;
  

  constructor(private readonly _imagesliderService: ImagesliderService) { }

  ngOnInit(): void {
    this.getimageslider();
  }
  public getimageslider(): void {
    this._imagesliderService.getimageslider().subscribe((data) => {
      this.homeslider = data;
      console.log(data);
    });
  }

}
