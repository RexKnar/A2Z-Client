import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { ProductService } from "src/app/shared/services/product.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { MessageConstants } from "src/app/shared/models/messageConstants";
import { ProductDetails } from "src/app/shared/models/Product";
import { Stock } from "src/app/shared/models/Stock";

@Component({
  selector: "app-reviews-component",
  templateUrl: "./reviews-component.component.html",
  styleUrls: ["./reviews-component.component.scss"]
})
export class ReviewsComponentComponent implements OnInit {
  @Input() productDetail: ProductDetails;
  @Input() newPointer: number;
  currentRating = 0;
  currentStockPointer = 0;
  currentStock: Stock;
  reviewForm: FormGroup;
  submitted = false;
  newRating = 0;
  constructor(private _productService: ProductService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService

  ) { }

  ngOnInit(): void {
    this.reviewForm = this.formBuilder.group({
      ratingDescription: ["", [Validators.required]],
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.currentStockPointer = this.newPointer;
    this.currentStock = this.productDetail.stock[this.currentStockPointer];

  }
  selectStar(stars: number) {
    this.newRating = stars;
    console.log(stars);
  }
  get f() {
    return this.reviewForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.reviewForm.value.rating1 < 1) {
      return;
    }
    if (this.reviewForm.invalid) {
      return;
    }
  }
  addReview(): void {
    this.reviewForm.value.userId = 1;
    this.reviewForm.value.stockId = 1;
    this.reviewForm.value.rating1 = this.newRating;
    if (this.reviewForm.valid) {
      if (this.reviewForm.value.rating1 < 1) {
        this.toastr.error(MessageConstants.ADDREVIEW_ERROR, "", { timeOut: 2000 });
        return;
      } else {
        this._productService
          .addReview(this.reviewForm.value)
          .subscribe((data) => {
            this.reviewForm.reset();
            this.submitted = false;
            this.toastr.success(MessageConstants.ADDREVIEW_SUCCESS, "", { timeOut: 2000 });
          });
      }
    } else {
      this.toastr.error(MessageConstants.ADDREVIEW_ERROR, "", { timeOut: 2000 });
    }
  }
}

