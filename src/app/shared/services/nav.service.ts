import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Menu
export interface Menu {
	path?: string;
	title?: string;
	type?: string;
	active?: boolean;
	badge?: boolean;
	badgeText?: string;
	children?: Menu[];
}

@Injectable({
	providedIn: 'root'
})

export class NavService {

	constructor() { }

	public screenWidth: any;
	public mainMenuToggle: boolean = false;

	// Windows width
	@HostListener('window:resize', ['$event'])
	onResize(event?) {
		this.screenWidth = window.innerWidth;
	}
	MENUITEMS: Menu[] = [
		{
			path: '/home', title: 'Home', type: 'link'
		},

		{
			path: '/', title: 'Top Picks', type: 'link', badge: true, badgeText: 'new'
		},
		{
			path: '/', title: 'Services', type: 'link'
		},
	];
	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);

}
