import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  menuItems: any;

  constructor(private readonly _menuService: MenuService) { }

  ngOnInit(): void {
    this.getAllHomeMenu()
  }
  public getAllHomeMenu(): void {
    this._menuService.getMenu().subscribe((data: any) => {
      this.menuItems = data;
      console.log(data);
    });
  }

}
