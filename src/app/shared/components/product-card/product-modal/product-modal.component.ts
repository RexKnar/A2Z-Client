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
import { isNgTemplate } from "@angular/compiler";

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
  unique1: ProductAttributes[] = [];
  attributeGroups: any = {};
  public modalOpen = false;
  public ImageSrc: string;
  currentStockPointer= 0;

  constructor(
    private modalService: NgbModal,
    private readonly _ProductService: ProductService
  ) {}

  ngOnInit(): void {
    this.currentStock = this.product.stocks[this.currentStockPointer];
    this.getAttribute();
  }
  ngOnChanges(changes: SimpleChanges): void {}

  openModal(currentStockPtr: number) {
    this.modalOpen = true;
    this.modalService.open(this.ProductView, {
      size: "lg",
      ariaLabelledBy: "modal-basic-title",
      centered: true,
      windowClass: "Productview",
    });
    this.currentStockPointer = currentStockPtr;
  }

  getAttribute() {
    this.product.stocks.forEach((stock) => {
      stock.attributes.forEach((attribute) => {
        attribute.stockId = stock.id;
        this.attributes.push(attribute);
      });
    });
    this.attributes = this.attributes.filter((item, i, arr) => arr.findIndex((t) => t.attributeName === item.attributeName && t.attributeValue === item.attributeValue) === i);
    for (let i = 0; i < Object.keys(this.attributes).length; i++) {
      const groupName = this.attributes[i].attributeName;
      if (!this.attributeGroups[groupName]) {
        this.attributeGroups[groupName] = [];
      }
      this.attributeGroups[groupName].push(this.attributes[i]);
    }
    // console.log(this.attributeGroups)
    const keys = Object.keys(this.attributeGroups);
    keys.forEach(item => {
      if (this.attributeGroups[item].length < 2) {
        delete this.attributeGroups[item];
      }
    });
  }

  showAttributes(attribute) {
    this.isactive = attribute.stockId;
    this.product.stocks.forEach((element) => {
      if (element.id === attribute.stockId) {
        this.currentStock = element;
      }
    });
  }
  setCurrentStockPointer(stockId: number) {
    let index = 0;
    this.product.stocks.forEach((stock) => {
     if (stock.id === stockId) {
      this.currentStockPointer = index;
      this.currentStock = this.product.stocks[index];
      return;
     }
     index = index + 1;
    });
  }

}
