import { Component, OnInit, SimpleChanges } from "@angular/core";
import { MyOrder } from "src/app/shared/models/Order";
import { OrderService } from "src/app/shared/services/order.service";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Invoice } from "src/app/shared/models/Invoice";
import { DatePipe } from "@angular/common";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: "app-myorder",
  templateUrl: "./myorder.component.html",
  styleUrls: ["./myorder.component.scss"]
})
export class MyorderComponent implements OnInit {
  currentOrder: MyOrder[] = [];
  name: any;
  currentInvoice: Invoice;
  deliveryDate: string;
  orderDate: string;

  constructor(private _orderService: OrderService) { }

  ngOnInit(): void {
    this.getMyOrder();

  }
  public getMyOrder(): void {
    this._orderService.getOrder().subscribe((data: any) => {
      this.currentOrder = data;
    });
  }
  public deleteMyOrder(id): void {
    this._orderService.deleteOrder(id).subscribe((data: any) => {
      this.getMyOrder();

    });
  }

  generatePdf(invoice) {
    this.currentInvoice = invoice;
    this.deliveryDate = new DatePipe("en-US").transform(
      this.currentInvoice.deliveryDate,
      "dd-MM-yyyy"
    );
    this.orderDate = new DatePipe("en-US").transform(
      this.currentInvoice.orderDate,
      "dd-MM-yyyy"
    );
    const documentDefinition = this.getDocumentDefinition();
    pdfMake.createPdf(documentDefinition).open();
  }

  getDocumentDefinition() {

    return {

      content: [

        {
          text: "Tax Invoice",
          bold: true,
          fontSize: 20,
          alignment: "center",
          margin: [0, 0, 0, 20]
        },
        {
          columns: [
            [
              {
                text: "Sold by:" + "kumariA2Z",
                style: "name"
              },
              {
                text: "Ship-from Address : " + "kuzhithurai,vilanvancode post,kanyakumari district,post:629163"
              },

            ],
            [

            ],
            [
              {
                text: "Invoice No #" + this.currentInvoice.transactionId,
              },
              {
                text: "GSTIN - " + "12345678",
                style: "gst"
              },

            ],

          ],


        },
        {
          table: {
            headerRows: 1,
            widths: [520],
            body: [
              [""],
              [""]
            ]
          },
          layout: "headerLineOnly"

        },
        {
          columns: [
            [
              {

                text: " Order ID:" + this.currentInvoice?.orderId,

              },
              {

                text: "Order Date: " + this.orderDate,
              },
              {
                text: "Invoice Date:" + this.deliveryDate,

              },

              // {
              //   text: "PAN:" + "AAPCA1759C",
              //   style:"gst"
              // },
              // {
              //   width: "20%",
              //   text: "CIN:" + "U52609KA2017PTC100573",
              //   style:"gst"
              // },

            ],

            [
              {
                text: "Bill To",
                bold: true,
                fontSize: 14,
              },
              {
                text: this.currentInvoice.address?.name,

              },
              {
                text: this.currentInvoice.address?.flatNo,

              },
              {
                text: this.currentInvoice.address?.address,

              },
              {
                text: this.currentInvoice.address?.locality,

              },
              {
                text: this.currentInvoice.address?.state,

              },
              {

                text: "pincode:" + this.currentInvoice.address?.pincode,

              }, {

                text: "Mobile:" + this.currentInvoice.address?.phonenumber,

              },


            ],
            [
              {
                text: "Ship To",
                bold: true,
                fontSize: 14,
              },
              {
                text: this.currentInvoice.address?.name,

              },
              {
                text: this.currentInvoice.address?.flatNo,

              },
              {
                text: this.currentInvoice.address?.address,

              },
              {
                text: this.currentInvoice.address?.locality,

              },
              {
                text: this.currentInvoice.address?.state,

              },
              {

                text: "pincode:" + this.currentInvoice.address?.pincode,

              },
              {

                text: "Mobile:" + this.currentInvoice.address?.phonenumber,

              },


            ],


          ],
        },
        {
          table: {
            headerRows: 1,
            widths: [520],
            body: [
              [""],
              [""]
            ]
          },
          layout: "headerLineOnly"

        },
        {
          columns: [
            [
              {
                text: "ProductName",
                style: "tableHeader"
              },
            ],
            [
              {
                text: "Qty",
                style: "tableHeader"
              },
            ],
            [
              {
                text: " Amount ₹",
                style: "tableHeader"
              },
            ],
            [
              {
                text: "Discount ₹",
                style: "tableHeader"
              },
            ],
            [
              {
                text: " Total ₹",
                style: "tableHeader"
              },
            ],

          ]
        },
        {
          table: {
            headerRows: 1,
            widths: [520],
            body: [
              [""],
              [""]
            ]
          },
          layout: "headerLineOnly"

        },
        {
          columns: [
            [
              {
                text: this.currentInvoice?.productName,
              },
            ],
            [
              {
                text: this.currentInvoice?.quantity,
              },
            ],
            [
              {
                text: this.currentInvoice?.orderPrice,
              },
            ],
            [
              {
                text: this.currentInvoice?.discount,
              },
            ],
            [
              {
                text: this.currentInvoice?.totalAmount,
              },
            ],
          ]
        },
        {
          table: {
            headerRows: 1,
            widths: [520],
            body: [
              [""],
              [""]
            ]
          },
          layout: "headerLineOnly"

        },
        {
          columns: [
            [
              {
                text: "Total",
              },
            ],
            [
              {
                text: this.currentInvoice?.quantity,
              },
            ],
            [
              {
                text: this.currentInvoice?.orderPrice,
              },
            ],
            [
              {
                text: this.currentInvoice?.discount,
              },
            ],
            [
              {
                text: this.currentInvoice?.totalAmount,
              },
            ],
          ]

        },
        {
          table: {
            headerRows: 2,
            widths: [520],
            body: [
              [""],
              [""]
            ]
          },
          layout: "headerLineOnly"

        },
        {
          text: "Grand Total:₹" + this.currentInvoice?.totalAmount,
          bold: true,
          fontSize: 20,
          alignment: "right",
          margin: [0, 0, 0, 20]
        },
        {
          text: "Kumari A2Z",
          fontSize: 13,
          alignment: "right",
        },
        {
          text: "Authorized Signatory",
          fontSize: 16,
          alignment: "right",
        },
        {
          table: {
            headerRows: 1,
            widths: [520],
            body: [
              [""],
              [""]
            ]
          },
          layout: "headerLineOnly"

        },
        {
          text: "*Keep this invoice and  manufacturer box for warranty purposes.",
          fontSize: 10,
          alignment: "center",
        },
      ],

      styles: {
        name: {
          fontSize: 16,
          bold: true
        },
        gst: {
          fontSize: 14,
          bold: true
        },
      }
    };
  }

}
