import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { LoginComponent } from "src/app/core/components/login/login.component";



@Component({
  selector: "app-toolsbar",
  templateUrl: "./toolsbar.component.html",
  styleUrls: ["./toolsbar.component.scss"]
})
export class ToolsbarComponent implements OnInit {
  @ViewChild("loginModal") LoginModal: LoginComponent;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 logOut() {
   sessionStorage.removeItem("userToken");
   this.router.navigate(["/"]);
 }
}
