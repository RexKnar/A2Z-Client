import { Component, OnInit, TemplateRef, ViewChild, Output, EventEmitter } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AuthenticationService } from "src/app/shared/services/authentication.service";
import { ToastrService } from "ngx-toastr";
import { MessageConstants } from "src/app/shared/models/messageConstants";
import { ActivatedRoute, Router } from "@angular/router";
import { UserLogin } from "src/app/shared/models/authentication";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-loginform",
  templateUrl: "./loginform.component.html",
  styleUrls: ["./loginform.component.scss"]
})
export class LoginformComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  isAuthorize = false;
  @Output() registerBtnClick = new EventEmitter();
  @Output() forgetBtnClick = new EventEmitter();
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private readonly _router: Router,
              private modalService: NgbModal,
              private _authenticationService: AuthenticationService,
              private toastr: ToastrService
  ) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }
  loginUser() {
    this.loginForm.value.userId = 0;
    this.loginForm.value.otp = 0;
    this.loginForm.value.newPassword = "";
    this._authenticationService.userLogin(this.loginForm.value).subscribe((data: any) => {
      sessionStorage.setItem("currentUser", JSON.stringify(data));
      if (data.isAuthorize) {
        // this._router.navigate(["/home"]);
        this.toastr.success(MessageConstants.LOGIN_SUCCESS, "", { timeOut: 2000 });
        this.modalService.dismissAll();
      } else {
        this.toastr.error(MessageConstants.LOGIN_ERROR, "", { timeOut: 2000 });
      }
    });
    (err: HttpErrorResponse) => {
      this.toastr.error(MessageConstants.LOGIN_API_ERROR, "", { timeOut: 2000 });
    };
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
  }
  forgetPassword(): void {
    this.forgetBtnClick.emit("reset");
  }
  registerPage(): void {
    this.registerBtnClick.emit("register");
  }
}
