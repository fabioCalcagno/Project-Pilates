import { Component, OnInit, ViewChild, ElementRef, VERSION } from '@angular/core';
import { FormBuilder } from '../../../node_modules/@angular/forms';
import { AuthTokenService } from '../Services/Auth/auth-token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private authToken : AuthTokenService   ) { }


user = this.authToken.showJwt();




isShown:boolean = false;

ngOnInit(){

}


/* 
 @ViewChild('navbarToggler', {read: true, static: false}) navbarToggler: ElementRef;

angularVersion: string;



ngOnInit() {
  this.angularVersion = VERSION.full;
}

private navBarTogglerIsVisible() {
  const isVisible: boolean = this.navbarToggler.nativeElement.offsetParent !== null;
  return isVisible;
}


collapseNav() {
  if (this.navBarTogglerIsVisible()) {
    console.log('collapseNav in NavigationComponent clicking navbarToggler');
    this.navbarToggler.nativeElement.click();
  }
} */


}



 


