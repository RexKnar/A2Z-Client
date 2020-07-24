import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  @Input() themeLogo: string = 'assets/images/logos/logoA2Z.png';
  constructor() { }

  ngOnInit() {
  }

}
