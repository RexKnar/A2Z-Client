import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FooterService } from 'src/app/services/footer.service';
import { CategoriesModel , SubscriptionsModel} from 'src/app/models/footer/footer.model';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // tslint:disable-next-line: new-parens
  adsubscriptions: SubscriptionsModel = new SubscriptionsModel;
  categories: CategoriesModel[];
  subscriptions: SubscriptionsModel = new SubscriptionsModel;
  @Input() themeLogo = 'assets/images/logos/logoA2Z.png';
  @Output()
  isDetailsExit: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private readonly _footerService: FooterService) { }

  ngOnInit(): void {
    this. getAllCategories();
  }
  public  getAllCategories(): void {
    this._footerService. getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  public addSubscriptions(): void {
    const sub = {
      subscriberemail: this.adsubscriptions.subscriberemail
    };
    this._footerService.addSubscriptions(sub).subscribe((data) => {
    
      });
  }

}
