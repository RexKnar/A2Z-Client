import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Address } from "src/app/shared/models/Address";
import { AddressService } from "src/app/shared/services/address.service";

@Component({
  selector: "app-address-form",
  templateUrl: "./address-form.component.html",
  styleUrls: ["./address-form.component.scss"]
})
export class AddressFormComponent implements OnInit {
  addUserAddress: Address;
  updateUserAddress: Address;
  addressDetails: Address;
  newAddress :boolean;
  updateAddress:boolean;
  addressId: number;
  name: string;
  phonenumber: string;
  flatNo: string;
  city: string;
  address: string;
  locality: string;
  state: string;
  pincode: string;
  addressType: number;
  country: string;
  landmark: string;
  id: number;
  currentAddressId: number;
  constructor(private _addressService: AddressService,
              private readonly _router: Router,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.newAddress = Boolean(this.route.snapshot.queryParamMap.get("newType"));
    this.currentAddressId = parseInt (this.route.snapshot.queryParamMap.get("id"));
    this.updateAddress = Boolean(this.route.snapshot.queryParamMap.get("updateType"));
    this.getCurrentAddress(this.currentAddressId);
  }

  addNewAddress() {
    this.addUserAddress = {
        name: this.name,
        phonenumber: this.phonenumber,
        flatNo: this.flatNo,
        city: this.city,
        address: this.address,
        locality: this.locality,
        state: this.state,
        pincode: this.pincode,
        country: this.country,
        landmark: this.landmark,
        status:1,
        addressId: 0,
        addressType: 0,
    };
  
    this._addressService.addAddress(this.addUserAddress).subscribe((data: any) => {
    this._router.navigate(["/address_book"]);
    });
  }
  getCurrentAddress(currentAddressId) {
    this._addressService.getCurrentAddress(currentAddressId).subscribe((data: any) => {
      for (const addressDetails of data) {
        this.name = addressDetails.name;
        this.phonenumber = addressDetails.phonenumber;
        this.flatNo = addressDetails.flatNo;
        this.city = addressDetails.city;
        this.address = addressDetails.address;
        this.locality = addressDetails.locality;
        this.state = addressDetails.state;
        this.pincode = addressDetails.pincode;
        this.addressType = addressDetails.addressType;
        this.country = addressDetails.country;
        this.landmark = addressDetails.landmark;
        this.id = addressDetails.id;
      }
    });
  }
  update() {
    this.updateUserAddress = {
      name: this.name,
      phonenumber: this.phonenumber,
      flatNo: this.flatNo,
      city: this.city,
      address: this.address,
      locality: this.locality,
      state: this.state,
      pincode: this.pincode,
      country: this.country,
      landmark: this.landmark,
      status:1,
      addressId: this.currentAddressId,
      addressType: 0,
  };
    this._addressService.updateAddress(this.updateUserAddress).subscribe((data: any) => {
      this._router.navigate(["/address_book"]);
    });
  }
}
