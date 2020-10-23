import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import { MessageConstants } from "src/app/shared/models/messageConstants";
import { AuthenticationService } from "src/app/shared/services/authentication.service";
@Component({
  selector: "app-registerform",
  templateUrl: "./registerform.component.html",
  styleUrls: ["./registerform.component.scss"],
})
export class RegisterformComponent implements OnInit {
  isRegisterForm = false;
  isButtonVisible = true;
  showDiv = false;
  showSuccessMessage: Boolean = false;
  registerForm: FormGroup;
  otpForm: FormGroup;
  submitted = false;
  isAuthorize = false;
  @Output() loginBtnClick = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private readonly _router: Router,
    private modalService: NgbModal,
    private _authenticationService: AuthenticationService,
    private toastr: ToastrService
  ) { }
  get f() {
    return this.registerForm.controls;
  }
  get o() {
    return this.otpForm.controls;
  }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userName: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
    this.otpForm = this.formBuilder.group({
      otp: ["", [Validators.required]],
    });
  }
  onSubmitRegisterForm() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return false;
    }
  }
  onSubmitOtpForm() {
    this.submitted = true;
    if (this.otpForm.invalid) {
      return false;
    }
  }
  userVerfiy() {
    if (this.registerForm.invalid) {
      return;
    }
    this.registerForm.value.userId = 0;
    this.registerForm.value.otp = 0;
    this.registerForm.value.newPassword = "";
    this._authenticationService.registeration(this.registerForm.value).subscribe((data: any) => {
      sessionStorage.setItem("userId", data.userId);
      if (data.statusCode) {
        this.toastr.error(MessageConstants[data.statusCode], "", {
          timeOut: 2000,
        });
        this.isButtonVisible = true;
        this.showDiv = false;
      }
      else {
        this.isButtonVisible = false;
        this.showDiv = true;
        this.showSuccessMessage = true;
        this.isRegisterForm = true;
      }
    });
  }
  resendOtp() {
    this.registerForm.value.userId = parseInt(sessionStorage.getItem("userId"));
    this.otpForm.value.otp = 0;
    this.registerForm.value.newPassword = "";
    this.registerForm.value.password = "";
    this._authenticationService.resendOtp(this.registerForm.value).subscribe((data: any) => {
      sessionStorage.setItem("userId", data.userId);
      this.showSuccessMessage = true;
    });
  }
  public register(): void {
    this.registerForm.value.userId = parseInt(sessionStorage.getItem("userId"));
    this.registerForm.value.newPassword = "";
    this.registerForm.value.userName = "";
    this.registerForm.value.password = "";
    this.registerForm.value.otp = this.otpForm.value.otp;
    this._authenticationService.verfiyUser(this.registerForm.value).subscribe((data: any) => {
      sessionStorage.setItem("currentUser", JSON.stringify(data));
      if (data.isAuthorize) {
        this.toastr.success(MessageConstants.REGISTER_SUCCESS, "", { timeOut: 2000, });
        this.modalService.dismissAll();
      } else {
        this.toastr.error(MessageConstants.REGISTER_ERROR, "", { timeOut: 2000 });
      }
    });
  }
  loginPage(): void {
    this.loginBtnClick.emit("login");
  }
}
