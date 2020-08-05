import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  Input,
} from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Product, ProductDetails } from "src/app/shared/models/Product";
import { ProductService } from "src/app/shared/services/product.service";

@Component({
  selector: "app-product-modal",
  templateUrl: "./product-modal.component.html",
  styleUrls: ["./product-modal.component.scss"],
})
export class ProductModalComponent implements OnInit {
  @ViewChild("productView", { static: false }) ProductView: TemplateRef<any>;
  public modalOpen: boolean = false;
  @Input() products: Product;
  @Input() productId: number;
  ProductDetails: ProductDetails[];
  constructor(
    private modalService: NgbModal,
    private readonly _ProductService: ProductService
  ) {}

  ngOnInit(): void {}
  openModal() {
    this.modalOpen = true;
    this.getProductDetail(this.productId);
    this.modalService.open(this.ProductView, {
      size: "lg",
      ariaLabelledBy: "modal-basic-title",
      centered: true,
      windowClass: "Productview",
    });
  }

  ngOnDestroy() {
    if (this.modalOpen) {
    }
  }
  public getProductDetail(productId: number): void {
    this._ProductService.getProductDetail(productId).subscribe((data) => {
      this.ProductDetails = data;
    });
  }
}
