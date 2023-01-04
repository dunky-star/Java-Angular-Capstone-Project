import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css'],
})
export class LoginStatusComponent implements OnInit {
  isAuthenticated: boolean = false;
  username: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  getUserDetails() {
    if (this.isAuthenticated) {
    }
  }

  logout() {
    // Terminates the session and removes current tokens.
  }
}
