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
  addressId = 0;
  addressType: number;
  action :boolean= true;
  constructor(private _addressService: AddressService,
    private readonly _router: Router,
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this._addressService.getAddress().subscribe((data: any) => {
      this.addressDetails = data;
    });
  }
  delete(id) {
    this._addressService.deleteAddress(id).subscribe((data: any) => {
    this.get();
    });
  }
  makeDefault() {


    this.addUserAddress.addressType = 0

  }
}
