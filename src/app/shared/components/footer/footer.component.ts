import { Component, OnInit, Input } from '@angular/core';
import { FooterService } from 'src/app/services/footer.service';
import { CategoriesModel } from 'src/app/models/footer/footer.model';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  categories: CategoriesModel[];
  @Input() themeLogo = 'assets/images/logos/logoA2Z.png';
  constructor(private readonly _footerService: FooterService) { }

  ngOnInit(): void {
    this. getAllCategories();
  }
  public  getAllCategories(): void {
    this._footerService. getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
