import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Order } from 'src/app/shared/classes/order';
import { ProductService } from 'src/app/shared/services/product.service';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit, AfterViewInit{

  public orderDetails : Order = {};

  constructor(public productService: ProductService,
    private orderService: OrderService) { }

  ngOnInit(): void {	
    this.orderService.checkoutItems.subscribe(response => this.orderDetails = response);
  }

  ngAfterViewInit() {
    
  }

}
