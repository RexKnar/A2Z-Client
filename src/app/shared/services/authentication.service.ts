import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { ROUTE_CONFIG, USER_LOGIN_API_CONFIG } from "../models/Constants";
import { UserLogin } from "../models/authentication";
@Injectable({
  providedIn: "root"
})
export class AuthenticationService {

  constructor(private readonly httpClient: HttpClient) { }
  userLogin(userLogin: UserLogin) {
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + USER_LOGIN_API_CONFIG.loginPageURL, userLogin,);
  }
  registeration(newUser: UserLogin) {
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + USER_LOGIN_API_CONFIG.registerPageURL, newUser,);
  }
  verfiyUser(verifiedUser: UserLogin) {
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + USER_LOGIN_API_CONFIG.verifyUserURL, verifiedUser,);
  }
  resendOtp(resendOtp: UserLogin) {
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + USER_LOGIN_API_CONFIG.resendOtpURL, resendOtp,);
  }
  forgotPassword(forgotPassword: UserLogin) {
    return this.httpClient.post(ROUTE_CONFIG.baseUrl + USER_LOGIN_API_CONFIG.forgotPasswordURL, forgotPassword,);
  }
  changePassword(changePassword: UserLogin) {
    return this.httpClient.put(ROUTE_CONFIG.baseUrl + USER_LOGIN_API_CONFIG.changePasswordURL, changePassword,);
  }
}
