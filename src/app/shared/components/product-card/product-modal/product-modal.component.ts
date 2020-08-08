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

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
})
export class ProductModalComponent implements OnInit {
  @ViewChild('productView', { static: false }) ProductView: TemplateRef<any>;
  @Input() products: Product;
  @Input() productId: number;
  public modalOpen = false;
  public ImageSrc: string;
  constructor(
    private modalService: NgbModal,
    private readonly _ProductService: ProductService
  ) { }

  ngOnInit(): void { }
  openModal() {
    this.modalOpen = true;
    this.modalService.open(this.ProductView, {
      size: 'lg',
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      windowClass: 'Productview',
    });
  }
}
