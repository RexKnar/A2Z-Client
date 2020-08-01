import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {
  @ViewChild("productView", { static: false }) ProductView: TemplateRef<any>;
  public modalOpen: boolean = false;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  openModal() {
    this.modalOpen = true;
    this.modalService.open(this.ProductView, {
      size: 'lg',
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      windowClass: 'Productiew'
    })
  }
  
  ngOnDestroy() {
      if(this.modalOpen){

    }
  }

}
