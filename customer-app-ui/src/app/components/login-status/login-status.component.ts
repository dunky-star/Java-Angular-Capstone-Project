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
  storage: Storage = sessionStorage;

  constructor(private userService: UserService, private router: Router) {
    this.userService.currentUser.subscribe((data) => {
    this.currentUser = data;
    });
  }

  ngOnInit(): void {

    this.getUserDetails();

  }

  getUserDetails(){
    if(this.currentUser){
      // Retrieve the user's email address from authenicated/loggedIn user.
      const theEmail = this.currentUser.email;
      const theName = this.currentUser.name;

      // Now, store the email in the browser storage.
      this.storage.setItem('userEmail', JSON.stringify(theEmail));

      // Now, store the user's name in the browser storage.
      this.storage.setItem('userName', JSON.stringify(theName));
    }
  }

  logOut() {
    // Terminates the session and removes current tokens.
    this.userService.logOut().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
