import { Component, OnInit, Input } from '@angular/core';
import { ProductDetails } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-descriptions',
  templateUrl: './descriptions.component.html',
  styleUrls: ['./descriptions.component.scss']
})
export class DescriptionsComponent implements OnInit {
  @Input() productDescription = new ProductDetails();
  constructor() { }

  ngOnInit(): void {

  }

}
