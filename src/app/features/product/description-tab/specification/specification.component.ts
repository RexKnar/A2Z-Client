import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductDetails } from 'src/app/shared/models/Product';
import { StockAttributes } from 'src/app/shared/models/ProductAttributes';
import { Stock } from 'src/app/shared/models/Stock';

@Component({
  selector: "app-specification",
  templateUrl: "./specification.component.html",
  styleUrls: ["./specification.component.scss"]
})
export class SpecificationComponent implements OnInit {
  @Input() productSpecification: ProductDetails;

  constructor() { }

  ngOnInit(): void {
  }
}
