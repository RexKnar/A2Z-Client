import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Address } from "src/app/shared/models/Address";
import { AddressService } from "src/app/shared/services/address.service";

@Component({
  selector: "app-address-book",
  templateUrl: "./address-book.component.html",
  styleUrls: ["./address-book.component.scss"]
})
export class AddressBookComponent implements OnInit {
  id: any;
  addUserAddress: Address;
  addressDetails: Address;
  addressId=0;
  addressType:number;
  constructor(private _addressService: AddressService,
              private readonly _router: Router,
              private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this._addressService.getAddress().subscribe((data: any) => {
        this.addressDetails = data;
    });
  }
  editBtn(id) {
    this._router.navigate(["/address_form"]);
    // this.route.queryParams.forEach((params) => {
    //   if (params["id"]) {
    //     this.addressId = params["id"];
    //   }
    // });
  }
  delete(id) {
    this._addressService.deleteAddress(id).subscribe((data: any) => {

    });
  }
  makeDefault(){
    
 
    this.addUserAddress.addressType =0
    this._addressService.addAddress(this.addUserAddress).subscribe((data: any) => {
    });
  }
}
