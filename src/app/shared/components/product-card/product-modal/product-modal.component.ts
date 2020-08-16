import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Product } from "src/app/shared/models/Product";
import { ProductService } from "src/app/shared/services/product.service";
import { ProductAttributes } from "src/app/shared/models/ProductAttributes";
import { Stock } from "src/app/shared/models/Stock";

@Component({
  selector: "app-product-modal",
  templateUrl: "./product-modal.component.html",
  styleUrls: ["./product-modal.component.scss"],
})
export class ProductModalComponent implements OnInit, OnChanges {
  public isactive: number;
  @ViewChild("productView", { static: false }) ProductView: TemplateRef<any>;
  @Input() product: Product;
  currentStock: Stock;
  attributes: ProductAttributes[] = [];
  attributeGroups: any = {};
  public modalOpen = false;
  public ImageSrc: string;

  constructor(
    private modalService: NgbModal,
    private readonly _ProductService: ProductService
  ) {}

  ngOnInit(): void {
    console.log("hai");
    console.log(this.product);
    this.currentStock = this.product.stocks[0];
    this.isactive = this.product.stocks[0].id;
    this.getAttribute();

  }
  ngOnChanges(changes: SimpleChanges): void {}

  openModal() {
    this.modalOpen = true;
    this.modalService.open(this.ProductView, {
      size: "lg",
      ariaLabelledBy: "modal-basic-title",
      centered: true,
      windowClass: "Productview",
    });
  }

  getAttribute() {
    this.product.stocks.forEach((stock) => {
      stock.attributes.forEach((attribute) => {
        attribute.stockId = stock.id;
        this.attributes.push(attribute);
      });
    });
    for (let i = 0; i < Object.keys(this.attributes).length; i++) {
      const groupName = this.attributes[i].attributeName;
      if (!this.attributeGroups[groupName]) {
        this.attributeGroups[groupName] = [];
      }
      this.attributeGroups[groupName].push(this.attributes[i]);
    }
    console.log(this.attributeGroups);
  }

  showAttributes(attribute) {
    this.isactive = attribute.stockId;
    this.product.stocks.forEach((element) => {
      if (element.id === attribute.stockId) {
        this.currentStock = element;
      }
    });
  }
}
