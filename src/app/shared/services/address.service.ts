import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Address } from "../models/Address";
import { ADDRESS_API_CONFIG, ROUTE_CONFIG } from "../models/Constants";

@Injectable({
  providedIn: "root"
})
export class AddressService {

  constructor(private readonly httpClient: HttpClient) { }

  addAddress(addUserAddress: Address) {
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + ADDRESS_API_CONFIG.addUserAddressURL, addUserAddress);
  }
  deleteAddress(id: any) {
    return this.httpClient.delete(ROUTE_CONFIG.baseUrl + ADDRESS_API_CONFIG.deleteAddressURL + id);
  }
  getAddress(): Observable<any> {
    return this.httpClient.get<any>(ROUTE_CONFIG.baseUrl + ADDRESS_API_CONFIG.getUserAddressURL);
  }
  getCurrentAddress(currentAddressId: any): Observable<any> {
    return this.httpClient.get<any>(ROUTE_CONFIG.baseUrl + ADDRESS_API_CONFIG.getUserCurrrentAddressURL + currentAddressId);
  }
  updateAddress(updateUserAddress: Address) {
    return this.httpClient.put(ROUTE_CONFIG.baseUrl + ADDRESS_API_CONFIG.updateAddressURL, updateUserAddress);
  }
  defaultAddress(defaultAddressId: any) {
    return this.httpClient.put(ROUTE_CONFIG.baseUrl + ADDRESS_API_CONFIG.defaultAddressURL + defaultAddressId, defaultAddressId);
  }
}

