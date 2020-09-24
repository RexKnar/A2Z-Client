import { Component, OnInit } from '@angular/core';
import { Menu, NavService } from 'src/app/shared/services/nav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  public menuItems: Menu[];

  constructor(private router: Router, public navService: NavService) {
    this.navService.items.subscribe(menuItems => this.menuItems = menuItems);
    this.router.events.subscribe((event) => {
      this.navService.mainMenuToggle = false;
    });
  }

  ngOnInit(): void {
  }
  logOut() {
    sessionStorage.removeItem("currentUser");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("userId");
    localStorage.removeItem("cartItems");
    this.router.navigate(["/home"]);
  }
  mainMenuToggle(): void {
    this.navService.mainMenuToggle = !this.navService.mainMenuToggle;
  }
  toggletNavActive(item) {
    item.active = !item.active;
  }

}