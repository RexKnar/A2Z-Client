import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { UserLogin } from "src/app/shared/models/authentication";
import { MessageConstants } from "src/app/shared/models/messageConstants";
import { Profile } from "src/app/shared/models/profile";
import { AuthenticationService } from "src/app/shared/services/authentication.service";
import { ProfileService } from "src/app/shared/services/profile.service";
import { ChangepasswordComponent } from "./changepassword/changepassword.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  @ViewChild("changePasswordModal") ChangePasswordModal: ChangepasswordComponent;
  userProfile: Profile;
  newNumber: UserLogin;
  resendOtp: UserLogin;
  public openDashboard = false;
  status = false;
  newUserName: string;
  userName: string;
  mobile: string;
  newMobile: number;
  email: string;
  profileName: string;
  gender: any;
  otp: number;
  showDiv = true;
  showNumberDiv = true;
  numberDiv = false;
  genderDiv = false;
  otpDiv = false;
  isProfileForm = true;
  isMobileForm = true;
  isSelectBtn = false;
  isEditBtn = false;
  isNumberForm = true;
  showSuccessMessage: Boolean = false;
  profileForm: FormGroup;
  newPassword: string;
  password: string;
  userId: number;
  constructor(private router: Router,
              private toastr: ToastrService,
              private readonly _router: Router,
              private _authenticationService: AuthenticationService,
              private _ProfileService: ProfileService) { }

  ngOnInit(): void {
    this.getProfile();
  }
  logOut() {
    sessionStorage.removeItem("currentUser");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("userId");
    localStorage.removeItem("cartItems");
    this.router.navigate(["/home"]);
  }
  getPath() {
    return this.router.url;
  }
  ToggleDashboard() {
    this.openDashboard = !this.openDashboard;
  }
  public getProfile(): void {
    if (this._router.navigate(["/dashboard"])) {
      this._ProfileService.getUserProfile().subscribe((data: any) => {
        sessionStorage.setItem("id", data.id);
        this.userProfile = data;
        this.email = this.userProfile.email;
        this.profileName = this.userProfile.profileName;
        this.mobile = this.userProfile.mobile;
        this.gender = this.userProfile.gender;
      });
      return;
    }
  }
  updateProfileDetails() {
    this.userProfile.email = this.email;
    this.userProfile.profileName = this.profileName;
    this.userProfile.profileId = parseInt(sessionStorage.getItem("id"));
    this.userProfile.gender = parseInt(this.gender);
    this._ProfileService.updateUserProfile(this.userProfile).subscribe((data: any) => {
      this.showDiv = true;
      this.isProfileForm = true;
      this.isSelectBtn = false;
      this.genderDiv = false;
    });
  }
  edit() {
    this.showDiv = false;
    this.isProfileForm = false;
    this.isSelectBtn = true;
    this.genderDiv = true;

  }
  cancel() {
    this.showDiv = true;
    this.isProfileForm = true;
    this.isSelectBtn = false;
    this.genderDiv = false;

  }
  requestChangeNumber() {
    this.userName = this.newUserName;
    this._authenticationService.changeNumberRequest(this.userName).subscribe((data: any) => {
      if (data.status) {
        this.showSuccessMessage = true;
        this.otpDiv = true;
      } else {
        this.toastr.error(MessageConstants.REQUESTCHANGENUMBER_ERROR, "", { timeOut: 2000, });
      }

    });
  }
  updateNumber() {
    this.newNumber = {
      userName: this.userName,
      otp: this.otp,
      newPassword: "",
      password: "",
      userId: 0,
    };
    this._authenticationService.updateNewNumber(this.newNumber).subscribe((data: any) => {
      if (data.status) {
        this.numberDiv = false;
        this.otpDiv = false;
        this.showNumberDiv = true;
        this.isEditBtn = false;
        this.mobile = this.userName;
      } else {
        this.toastr.error(MessageConstants.CHANGENUMBER_ERROR, "", { timeOut: 2000, });
      }
    });
  }
  changeNumber() {
    this.showNumberDiv = false;
    this.numberDiv = true;
    this.isMobileForm = false;
    this.isEditBtn = true;
  }
  changeNumberCancel() {
    this.isMobileForm = true;
    this.isEditBtn = false;
    this.showNumberDiv = true;
    this.numberDiv = false;
    this.otpDiv = false;
  }
}

