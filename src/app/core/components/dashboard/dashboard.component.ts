import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  public openDashboard = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logOut() {
    sessionStorage.removeItem("currentUser");
    this.router.navigate(["/home"]);
  }
  getPath() {
    return this.router.url;
  }
  ToggleDashboard() {
    this.openDashboard = !this.openDashboard;
  }

}
