import { Component, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { LoginComponent } from "src/app/core/components/login/login.component";
import { Authorization } from 'src/app/shared/models/Authorization';
import { LocalStorageService } from 'src/app/shared/utility/LocalStorageService';




@Component({
  selector: "app-toolsbar",
  templateUrl: "./toolsbar.component.html",
  styleUrls: ["./toolsbar.component.scss"]
})
export class ToolsbarComponent implements OnInit {
  @ViewChild("loginModal") LoginModal: LoginComponent;
  isLoggedin: boolean = false;
  tokenData: Authorization;
  constructor(private router: Router, private _localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.ProfileTab();

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ProfileTab();
  }

  logOut() {
    sessionStorage.removeItem("currentUser");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("userId");
    localStorage.removeItem("cartItems");
    this.router.navigate(["/home"]);
    this.isLoggedin = false;

  }

  ProfileTab() {
    this.tokenData = this._localStorageService.getAuthorizationData();
    if (this.tokenData.isAuthorize) {
      this.isLoggedin = true;
    }
    else {
      this.isLoggedin = false;
    }
  }
}
