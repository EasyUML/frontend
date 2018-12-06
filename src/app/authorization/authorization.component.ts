import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.sass']
})
export class AuthorizationComponent implements OnInit {

display = false;
display1 = false;
constructor() { }
ngOnInit() {
}

showDialog() {
this.display = true;
}
ShowSignUp() {
  this.display1 = true;
  this.display = false;
}
}
