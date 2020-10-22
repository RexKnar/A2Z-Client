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
import { StockAttributes } from "src/app/shared/models/ProductAttributes";
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
  currentStock: Stock = new Stock();
  attributes: StockAttributes[] = [];
  unique1: StockAttributes[] = [];
  attributeGroups: any = {};
  public modalOpen = false;
  public ImageSrc: string;
  public currentStockPointer = 0;
  public counter = 1;
  public discountPrice = 0;
  public discount: any = 0;
  public price: any = 0;
  constructor(
    private modalService: NgbModal,
    private readonly _ProductService: ProductService
  ) { }

  ngOnInit(): void {
    this.currentStock = this.product.stocks[this.currentStockPointer];
    this.getAttribute();
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
  updateCheckoutQuantity(newCounter: number) {
    this.counter = newCounter;
  }
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
      stock.stockAttributes.forEach((attribute) => {
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
