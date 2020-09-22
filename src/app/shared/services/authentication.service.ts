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
  userLogin(userLogin: UserLogin) {
    var data = "userName=" + userLogin + "&password=" + userLogin;
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + USER_LOGIN_API_CONFIG.loginPageURL, userLogin,);
  }
  registeration(newUser: UserLogin) {
    var data = "userName=" + newUser + "&password=" + newUser;
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + USER_LOGIN_API_CONFIG.registerPageURL, newUser,);
  }
  verfiyUser(verifiedUser: UserLogin) {
    var data = "userId=" + verifiedUser + "&otp=" + verifiedUser;
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + USER_LOGIN_API_CONFIG.verifyUserURL, verifiedUser,);
  }
  resendOtp(resendOtp: UserLogin) {
    var data = "userId=" + resendOtp + "&otp=" + resendOtp;
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + USER_LOGIN_API_CONFIG.resendOtpURL, resendOtp,);
  }
  forgotPassword(forgotPassword: UserLogin) {
    var data = "userName=" + forgotPassword;
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + USER_LOGIN_API_CONFIG.forgotPasswordURL, forgotPassword,);
  }
  changePassword(changePassword: UserLogin) {
    var data = "userName=" + changePassword + "&otp=" + changePassword + "&newPassword=" + changePassword;
    return this.httpClient.put(ROUTE_CONFIG.baseUrl + USER_LOGIN_API_CONFIG.changePasswordURL, changePassword,);
  }
}
