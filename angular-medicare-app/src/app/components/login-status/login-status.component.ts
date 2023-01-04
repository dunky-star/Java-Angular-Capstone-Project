import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css'],
})
export class LoginStatusComponent implements OnInit {
  isAuthenticated: boolean = false;
  username: string = '';

  constructor() {}

  ngOnInit(): void {}

  getUserDetails() {
    if (this.isAuthenticated) {
    }
  }

  logout() {
    // Terminates the session and removes current tokens.
  }
}
