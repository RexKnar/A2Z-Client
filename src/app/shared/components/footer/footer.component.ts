import { messageConstants } from './../../models/messageConstants';
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FooterService } from "../../services/footer.service";
import { Subscription } from "../../models/Subscription";
import { Category } from "../../models/Category";
import { ToastrService } from "ngx-toastr";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  subscription: Subscription = new Subscription();
  subscriptionForm: FormGroup;
  submitted = false;
  categories: Category[];
  @Input() themeLogo = "assets/images/a2z/logos/logo A2Z-01.png";
  @Output()
  isDetailsExit: EventEmitter<boolean> = new EventEmitter<boolean>();
  ngSubmit = new EventEmitter();
  constructor(
    private readonly _footerService: FooterService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.subscriptionForm = this.formBuilder.group({
      subscriberemail: ["", [Validators.required, Validators.email]],
    });
    this.getAllCategories();
  }
  get f() {
    return this.subscriptionForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.subscriptionForm.invalid) {
      return;
    }
  }
  public getAllCategories(): void {
    this._footerService.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }
  addSubscriptions(): void {
    if (this.subscriptionForm.valid) {
      this._footerService
        .addSubscriptions(this.subscriptionForm.value)
        .subscribe((data) => {
          this.subscriptionForm.reset();
          this.submitted = false;
          this.toastr.success(messageConstants.SUBSCRIBE_SUCCESS, "", { timeOut: 2000 });
        });
    }
    else {
      this.toastr.error(messageConstants.SUBSCRIBE_ERROR, "", { timeOut: 2000 });
    }
  }
}
