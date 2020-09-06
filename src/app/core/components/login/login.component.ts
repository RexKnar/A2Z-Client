import { Component, OnInit, TemplateRef, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild("loginpage", { static: false }) LoginPage: TemplateRef<any>;
  public modalOpen: boolean = false;

  constructor(private modalService: NgbModal,
    @Inject(PLATFORM_ID) private platformId: Object,) { }

  ngOnInit(): void {
  }
  openModal() {
    this.modalOpen = true;
    if (isPlatformBrowser(this.platformId)) { 
      this.modalService.open(this.LoginPage, { 
        size: 'md',
        ariaLabelledBy: 'login',
        centered: true,
        windowClass: 'LoginPage' 
      }).result.then((result) => {
        `Result ${result}`
      }, (reason) => {
        // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }
  
  // ngOnDestroy() {
  //   if(this.modalOpen){
  //     this.modalService.dismissAll();
  //   }
  // }

}
