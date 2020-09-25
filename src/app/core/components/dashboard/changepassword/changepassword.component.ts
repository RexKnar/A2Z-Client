import { isPlatformBrowser } from "@angular/common";
import { Component, Inject, OnInit, PLATFORM_ID, TemplateRef, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import { MessageConstants } from "src/app/shared/models/messageConstants";
import { AuthenticationService } from "src/app/shared/services/authentication.service";

@Component({
  selector: "app-changepassword",
  templateUrl: "./changepassword.component.html",
  styleUrls: ["./changepassword.component.scss"]
})
export class ChangepasswordComponent implements OnInit {
  @ViewChild("changePasswordModal", { static: false }) ChangePasswordModal: TemplateRef<any>;
  changePasswordForm: FormGroup;
  submitted = false;
  public modalOpen = false;
  public closeResult: string;
  constructor(
    private formBuilder: FormBuilder,
    private _authenticationService: AuthenticationService,
    private toastr: ToastrService,
    private modalService: NgbModal,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  ngOnInit(): void {
    this.changePasswordForm = this.formBuilder.group({
      newPassword: ["", [Validators.required]],
    });
  }
  ChangePassword() {
    this.changePasswordForm.value.userId = 0;
    this.changePasswordForm.value.otp = 0;
    this.changePasswordForm.value.userName = "";
    this.changePasswordForm.value.password = "";
    this._authenticationService.changePassword(this.changePasswordForm.value).subscribe((data: any) => {
      this.toastr.success(MessageConstants.PASSWORD_CHANGE_SUCCESS, "", { timeOut: 2000, });
      this.changePasswordForm.reset();
      this.modalService.dismissAll();
    });
  }
  get f() { return this.changePasswordForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.changePasswordForm.invalid) {
      return;
    }
  }
  openModal() {
    this.modalOpen = true;
    if (isPlatformBrowser(this.platformId)) {
      this.modalService.open(this.ChangePasswordModal, {
        size: "700px",
        ariaLabelledBy: "login",
        centered: true,
        windowClass: "customChangePasswordModal theme-modal"
      }).result.then((result) => {
        `Result ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnDestroy() {
    if (this.modalOpen) {
      this.modalService.dismissAll();
    }
  }

}
