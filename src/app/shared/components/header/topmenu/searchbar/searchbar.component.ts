import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  menuItems: any;
  searchTerm: string;
  categoryId: number;
  constructor(private readonly _menuService: MenuService,
    private readonly _router: Router,
  ) { }

  ngOnInit(): void {
    this.getAllHomeMenu();
  
  }

  public getAllHomeMenu(): void {
    this._menuService.getMenu().subscribe((data: any) => {
      this.menuItems = data;
    });
  }
  public searchItems(): void {
    if (this.categoryId) {
      this._router.navigate(['/category'], {
        queryParams: {
          category: this.categoryId,
          search_string: this.searchTerm
        }
      });
    }
    else {
      this._router.navigate(['/category'], {
        queryParams: {
          search_string: this.searchTerm
        }
      });
    }


  }
}
