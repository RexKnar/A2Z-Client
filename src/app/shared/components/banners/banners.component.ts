import { Component, OnInit, Input } from '@angular/core';
import { Databind } from 'src/app/shared/models/databind';
@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit {
 
  @Input() databind = new Databind;
 constructor() {
   
  }
 ngOnInit(): void {
  }

}
