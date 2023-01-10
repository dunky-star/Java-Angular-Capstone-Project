import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  isSuccessful = false;
  isSignUpFailed = false;

  form: any = {
    name: null,
    email: null,
    username: null,
    password: null,
  };

  errorMessage?: string;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  onSubmit(): void {
    const { name, email, username, password } = this.form;

    this.userService.register(this.user).subscribe({
      next: () => {
        this.router.navigate(['/login']);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      },
      complete: () => {},
    });
  }

}
