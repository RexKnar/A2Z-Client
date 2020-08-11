import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  Input,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/shared/models/Product';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductAttributes } from 'src/app/shared/models/ProductAttributes';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Stock } from 'src/app/shared/models/Stock';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
})
export class ProductModalComponent implements OnInit {
  @ViewChild('productView', { static: false }) ProductView: TemplateRef<any>;
  @Input() products: Product;
  currentStock: Stock;
  attributes: ProductAttributes[] = [];
  attributeGroups: any = {};
  public modalOpen = false;
  public ImageSrc: string;
  constructor(
    private modalService: NgbModal,
    private readonly _ProductService: ProductService
  ) { }

  ngOnInit(): void {
    this.currentStock = this.products.stock[0];
    this.getAttribute();
  }
  openModal() {
    this.modalOpen = true;
    this.modalService.open(this.ProductView, {
      size: 'lg',
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      windowClass: 'Productview',
    });
  }
  getAttribute() {
    this.products.stock.forEach(stock => {
      stock.attributes.forEach(attribute => {
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
  }
  showAttributes(attribute) {
    this.products.stock.forEach(element => {
      if (element.id === attribute.stockId) {
        this.currentStock = element;
      }
    });
  }
}













