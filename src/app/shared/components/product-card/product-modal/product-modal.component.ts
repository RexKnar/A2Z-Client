import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {
  @ViewChild("productView", { static: false }) ProductView: TemplateRef<any>;
  public modalOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  openModal() {
    this.modalOpen = true;
    // if (isPlatformBrowser(this.platformId)) { // For SSR 
    //   this.modalService.open(this.QuickView, { 
    //     size: 'lg',
    //     ariaLabelledBy: 'modal-basic-title',
    //     centered: true,
    //     windowClass: 'Quickview' 
    //   }).result.then((result) => {
    //     `Result ${result}`
    //   }, (reason) => {
    //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //   });
    // }
  }
  ngOnDestroy() {
    if(this.modalOpen){
      
    }
  }

}
