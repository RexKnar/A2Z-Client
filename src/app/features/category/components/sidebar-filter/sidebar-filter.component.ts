import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar-filter',
  templateUrl: './sidebar-filter.component.html',
  styleUrls: ['./sidebar-filter.component.scss'],
})
export class SidebarFilterComponent implements OnInit {
  @Input() public mobileSidebar: boolean;
  @Input() public minPrice: number;
  @Input() public maxPrice: number;
  @Input() public products: any[];
  @Input() public attributes: any[];

  @Output() public updateFilterEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() public toggleMobileSidebarEvent: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  updateFilter(event): void {
    this.updateFilterEvent.emit(event);
  }

  toggleMobileSidebar(): void {
    this.toggleMobileSidebarEvent.emit(null);
  }
}
