import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit{

  isAuthenticated: boolean = false;
  userFullName: string = '';


  constructor() { }


  ngOnInit(): void {


  }

  getUserDetails() {
    if (this.isAuthenticated) {


    }
  }

  logout() {
    // Terminates the session with Okta and removes current tokens.

  }

}



