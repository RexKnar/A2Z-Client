import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FooterService } from '../services/footer.service';
import { Subscription } from '../../models/Subscription';
import { Category } from '../../models/Category';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  subscription: Subscription = new Subscription();
  categories: Category [];
  @Input() themeLogo = 'assets/images/logos/logoA2Z.png';
  @Output()
  isDetailsExit: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private readonly _footerService: FooterService) {}

  ngOnInit(): void {
    this.getAllCategories();
  }

  public getAllCategories(): void {
    this._footerService.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  public addSubscriptions(): void {
    this._footerService
      .addSubscriptions(this.subscription)
      .subscribe((data) => {
      });
  }
}
