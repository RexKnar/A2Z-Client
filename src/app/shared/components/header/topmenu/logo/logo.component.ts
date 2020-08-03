import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  @Input() themeLogo: string = 'assets/images/a2z/logos/logo A2Z-01.png';

  constructor() { }

  ngOnInit(): void {
  }

}
