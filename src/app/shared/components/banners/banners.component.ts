import { Component, OnInit, Input } from '@angular/core';
import {  Banner } from '../../models/banner';



@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit {

  @Input() banner = new Banner();
  constructor() {

  }

  ngOnInit(): void {
  }

}
