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

  constructor(private router: Router, public navServices: NavService) {
    this.navServices.items.subscribe(menuItems => this.menuItems = menuItems);
    this.router.events.subscribe((event) => {
      this.navServices.mainMenuToggle = false;
    });
  }

  ngOnInit(): void {
  }
  mainMenuToggle(): void {
    this.navServices.mainMenuToggle = !this.navServices.mainMenuToggle;
  }
  toggletNavActive(item) {
    item.active = !item.active;
  }

}