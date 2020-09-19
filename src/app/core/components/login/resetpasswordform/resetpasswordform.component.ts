import { Component, OnInit, ViewChild, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import { MessageConstants } from "src/app/shared/models/messageConstants";
import { AuthenticationService } from "src/app/shared/services/authentication.service";

@Component({
  selector: "app-resetpasswordform",
  templateUrl: "./resetpasswordform.component.html",
  styleUrls: ["./resetpasswordform.component.scss"]
})
export class ResetpasswordformComponent implements OnInit {
  @Output() registerBtnClick = new EventEmitter();
  @Output() loginBtnClick = new EventEmitter();
  isResetPasswordForm = false;
  isButtonVisible = true;
  showDiv = false;
  showSuccessMessage: Boolean = false;
  resetPasswordForm: FormGroup;
  newPasswordForm: FormGroup;
  submitted = false;
  status = false;

  constructor(private formBuilder: FormBuilder,
              private _authenticationService: AuthenticationService,
              private toastr: ToastrService) { }

  ngOnInit(): void {

    this.resetPasswordForm = this.formBuilder.group({
      userName: ["", [Validators.required]],

    });
    this.newPasswordForm = this.formBuilder.group({
      otp: ["", [Validators.required]],
      newPassword: ["", [Validators.required]],

    });

  }
  get f() { return this.resetPasswordForm.controls; }
  get n() { return this.newPasswordForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.resetPasswordForm.invalid) {
      return false;
    }
    if (this.newPasswordForm.invalid) {
      return false;
    }
  }
  userVerfiy() {
    if (this.resetPasswordForm.invalid) {
      return;
    }
    this.resetPasswordForm.value.userId = 0;
    this.resetPasswordForm.value.otp = 0;
    this.resetPasswordForm.value.newPassword = "";
    this.resetPasswordForm.value.password = "";
    this._authenticationService.forgotPassword(this.resetPasswordForm.value).subscribe((data: any) => {
      sessionStorage.setItem("userId", data.userId);
      if (data.statusCode) {
        this.toastr.error(MessageConstants[data.statusCode], "", {
          timeOut: 2000,
        });
        this.isButtonVisible = true;
        this.showDiv = false;
      } else {
        this.isButtonVisible = false;
        this.showDiv = true;
        this.showSuccessMessage = true;
        this.isResetPasswordForm = true;
      }
    });
  }
  resendOtp() {
    this.resetPasswordForm.value.userId = parseInt(sessionStorage.getItem("userId"));
    this.resetPasswordForm.value.otp = 0;
    this.resetPasswordForm.value.newPassword = "";
    this.resetPasswordForm.value.password = "";
    this._authenticationService.resendOtp(this.resetPasswordForm.value).subscribe((data: any) => {
      sessionStorage.setItem("userId", data.userId);
      this.showSuccessMessage = true;
    });
  }
  public submit(): void {
    this.resetPasswordForm.value.userId = parseInt(sessionStorage.getItem("userId"));
    this.resetPasswordForm.value.userName = "";
    this.resetPasswordForm.value.password = "";
    this.resetPasswordForm.value.otp = this.newPasswordForm.value.otp;
    this.resetPasswordForm.value.newPassword = this.newPasswordForm.value.newPassword;
    this._authenticationService.changePassword(this.resetPasswordForm.value).subscribe((data: any) => {
      if (data.statusCode) {
        this.toastr.success(MessageConstants[data.statusCode], "", { timeOut: 2000, });
        return;
      }
    });
  }
  registerPage(): void {
    this.registerBtnClick.emit("register");
  }
  loginPage(): void {
    this.loginBtnClick.emit("login");
  }

}
