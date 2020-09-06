import { Component, OnInit, TemplateRef, ViewChild, PLATFORM_ID, Inject } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { isPlatformBrowser } from "@angular/common";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"]
})
export class ForgotPasswordComponent implements OnInit {
  @ViewChild("forgetpasswordmodal", { static: false }) ForgetPassword: TemplateRef<any>;
  public modalOpen = false;
  public closeResult: string;

  constructor(private modalService: NgbModal,
              @Inject(PLATFORM_ID) private platformId: Object, ) { }

  ngOnInit(): void {
  }
  openModal() {
    this.modalOpen = true;
    if (isPlatformBrowser(this.platformId)) {
      this.modalService.open(this.ForgetPassword, {
        size: "700px",
        ariaLabelledBy: "forgot-password",
        centered: true,
        windowClass: "customLoginModal"
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
