import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, from } from "rxjs";
import { ROUTE_CONFIG, USER_LOGIN_API_CONFIG } from "../models/Constants";
import { UserLogin } from "../models/authentication";
@Injectable({
  providedIn: "root"
})
export class AuthenticationService {

  constructor(private readonly httpClient: HttpClient) { }
  UserLoginResponse(userLogin: UserLogin) {
    var data = "userName=" + userLogin + "&password=" + userLogin;
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + USER_LOGIN_API_CONFIG.loginPageURL, userLogin);
  }
}
