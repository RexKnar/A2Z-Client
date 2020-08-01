import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-attribute-filter',
  templateUrl: './attribute-filter.component.html',
  styleUrls: ['./attribute-filter.component.scss'],
})
export class AttributeFilterComponent implements OnInit {
  @Input() products: any[] = [];
  @Input() attributes: any[] = [];

  @Output() brandsFilter: EventEmitter<any> = new EventEmitter<any>();

  public collapse: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  appliedFilter(event) {
    // let index = this.brands.indexOf(event.target.value);  // checked and unchecked value
    // if (event.target.checked)
    //   this.brands.push(event.target.value); // push in array cheked value
    // else
    //   this.brands.splice(index,1);  // removed in array unchecked value
    // let brands = this.brands.length ? { brand: this.brands.join(",") } : { brand: null };
    // this.brandsFilter.emit(brands);
  }

  // check if the item are selected
  checked(item) {
    // if(this.brands.indexOf(item) != -1){
    //   return true;
    // }
  }
}
