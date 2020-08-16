import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Review } from 'src/app/shared/models/review';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reviews-component',
  templateUrl: './reviews-component.component.html',
  styleUrls: ['./reviews-component.component.scss']
})
export class ReviewsComponentComponent implements OnInit {

 review = new Review();
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {

  }
  addReview(f: NgForm) {
    f.value.userId = 1;
    f.value.stockId = 1;
    // this.review.userId = 1;
    // this.review.stockId = 1;
    // this.review.ratingDescription = ratingDescription;
     console.log(f.value);
    //  f.userId = 1;
    //  f.append('userId', 1);

     this._productService.addReview(f.value).subscribe((data) => {
      console.log(data);

    });

}}

// formData.append("name", this.form.get('name').value);
//     formData.append("avatar", this.form.get('avatar').value);
