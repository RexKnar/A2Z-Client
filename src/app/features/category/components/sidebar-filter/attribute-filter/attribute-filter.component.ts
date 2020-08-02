import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AttributeModel } from '../../../models/attribute.model';

@Component({
  selector: 'app-attribute-filter',
  templateUrl: './attribute-filter.component.html',
  styleUrls: ['./attribute-filter.component.scss'],
})
export class AttributeFilterComponent implements OnInit {
  @Input() products: any[] = [];
  @Input() attribute: AttributeModel;

  @Output() attributeFilter: EventEmitter<any> = new EventEmitter<any>();

  public collapse: boolean = true;
  public selectedAttribute: any = [];
  constructor() {}

  ngOnInit(): void {}

  appliedFilter(name, event) {
    const index = this.selectedAttribute.indexOf(event.target.value); // checked and unchecked value
    if (event.target.checked) {
      this.selectedAttribute.push(event.target.value);
    } else {
      this.selectedAttribute.splice(index, 1);
    }
    this.attributeFilter.emit({ attributeName: name, attributeValues: this.selectedAttribute });
  }

  checked(item) {
    if (this.attribute.values.indexOf(item) !== -1) {
      return true;
    }
  }
}
