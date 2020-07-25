import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit {
 
 
 
  @Input() navUrl:string;
  @Input() imgUrl:string;
  @Input() discountText:string;
  @Input() discountCategory:String;
  constructor() {
   
  }
 ngOnInit(): void {
  }

}
