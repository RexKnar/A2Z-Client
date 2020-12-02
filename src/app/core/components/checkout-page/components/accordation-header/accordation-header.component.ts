import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-accordation-header',
  templateUrl: './accordation-header.component.html',
  styleUrls: ['./accordation-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .card.disabled {
    }
  `]
})
export class AccordationHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
export class NgbdAccordionHeader {
  disabled = false;
}


