import { Component, OnInit, ViewChild, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-resetpasswordform",
  templateUrl: "./resetpasswordform.component.html",
  styleUrls: ["./resetpasswordform.component.scss"]
})
export class ResetpasswordformComponent implements OnInit {
  @Output() registerBtnClick = new EventEmitter();

  resetPasswordForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private modalService: NgbModal) { }

  ngOnInit(): void {  this.resetPasswordForm = this.formBuilder.group({
    userName: ["", [Validators.required]],
    otpnumber: ["", [Validators.required]],
    newpassword: ["", [Validators.required]],

  });

}
get f() { return this.resetPasswordForm.controls; }
onSubmit() {
  this.submitted = true;
  if (this.resetPasswordForm.invalid) {
    return;
  }
}
registerPage(): void {
  this.registerBtnClick.emit("register");
}
public login(): void {
  if (this.resetPasswordForm.valid) {

  }
}
}
