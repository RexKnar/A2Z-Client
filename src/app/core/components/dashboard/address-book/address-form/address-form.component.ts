import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
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
  constructor(private _addressService: AddressService,
              private formBuilder: FormBuilder,
              private readonly _router: Router,
  ) { }
 
  ngOnInit(): void {
    this.getCurrentAddress();
  }

  add() {
    this.addUserAddress ={
        name: this.name,
        phonenumber: this.phonenumber,
        flatNo: this.flatNo,
        city: this.city,
        address: this.address,
        locality: this.locality,
        state: this.state,
        pincode: this.pincode,
        country: this.country,
        landmark:this.landmark,
        addressId:0,
        addressType:0,
        id:0,
    };
    this._addressService.addAddress(this.addUserAddress).subscribe((data: any) => {
    this._router.navigate(["/address_book"]);

    });
  }
  getCurrentAddress() {
    this._addressService.getAddress().subscribe((data: any) => {
      this.addressDetails = data;
      console.log(this.addressDetails);

      this.name = this.addressDetails.name;
      this.phonenumber = this.addressDetails.phonenumber;
      this.flatNo = this.addressDetails.flatNo;
      this.city = this.addressDetails.city;
      this.address = this.addressDetails.address;
      this.locality = this.addressDetails.locality;
      this.state = this.addressDetails.state;
      this.pincode = this.addressDetails.pincode;
      this.addressType = this.addressDetails.addressType;
      this.country = this.addressDetails.country;
      this.landmark = this.addressDetails.landmark;
      this.id = this.addressDetails.id;

    });
  }
  update() {
    this.updateUserAddress ={
      name: this.name,
      phonenumber: this.phonenumber,
      flatNo: this.flatNo,
      city: this.city,
      address: this.address,
      locality: this.locality,
      state: this.state,
      pincode: this.pincode,
      country: this.country,
      landmark:this.landmark,
      addressId:0,
      addressType:0,
      id:0,
  };
    this._addressService.updateAddress(this.updateUserAddress).subscribe((data: any) => {

    });
  }
}
