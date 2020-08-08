import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../../services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any;
  constructor(public menuService: MenuService) { }

  public getAllHomeMenu(): void {
    this.menuService.getMenu().subscribe((data: any) => {
      this.menuItems = data;
    });
  }
  ngOnInit(): void {
    this.getAllHomeMenu()
  }
  leftMenuToggle(): void {
    this.menuService.sidebarToggle = !this.menuService.sidebarToggle;
  }
  toggletNavActive(menuItem) {
    menuItem.active = !menuItem.active;
  }

}
