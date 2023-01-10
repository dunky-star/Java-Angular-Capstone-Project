import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css'],
})
export class LoginStatusComponent implements OnInit {
  isAuthenticated: boolean = false;
  name: string = '';
  currentUser: User = new User();
  errorMessage?: string;

  constructor(private userService: UserService, private router: Router) {
    this.userService.currentUser.subscribe((data) => {
      this.currentUser = data;
    });
  }

  ngOnInit(): void {
    /**if (this.userService.isLoggedIn) {
      this.isAuthenticated = true;
    } else {
      !this.isAuthenticated;
    }
    **/
  }

  getUserDetails() {}

  logOut() {
    // Terminates the session and removes current tokens.
    this.userService.logOut().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
