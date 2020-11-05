import { Component, OnInit, SimpleChanges } from '@angular/core';
import { MyOrder } from 'src/app/shared/models/Order';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.scss']
})
export class MyorderComponent implements OnInit {
  currentOrder: MyOrder[] = [];
  showInvoice: boolean = false;
  constructor(private _orderService: OrderService,) { }

  ngOnInit(): void {
    this.getMyOrder();

  }
  public getMyOrder(): void {
    this._orderService.getOrder().subscribe((data: any) => {
      this.currentOrder = data;

    });
  }
  public getInvoice(id:any): void {
   alert(id);
  }
  public deleteMyOrder(id): void {
    this._orderService.deleteOrder(id).subscribe((data: any) => {
      this.getMyOrder();

    });
  }
}
