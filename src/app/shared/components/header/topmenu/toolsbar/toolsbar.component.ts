import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../../../modals/login/login.component';



@Component({
  selector: 'app-toolsbar',
  templateUrl: './toolsbar.component.html',
  styleUrls: ['./toolsbar.component.scss']
})
export class ToolsbarComponent implements OnInit {
  @ViewChild("loginModal") LoginModal: LoginComponent;
   
  constructor() { }

  ngOnInit(): void {
  }
 
}
