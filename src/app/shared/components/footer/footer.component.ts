import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Category, subscribe } from "../../models/footer.model";
import { FooterService } from "../services/footer.service";
@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  adsubscriptions: subscribe = new subscribe();
  categories: Category[];
  @Input() themeLogo = "assets/images/logos/logoA2Z.png";
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
    console.log(this.adsubscriptions);
    this._footerService
      .addSubscriptions(this.adsubscriptions)
      .subscribe((data) => {
      });
  }
}
