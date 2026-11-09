import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../model/user.model';
import { Auth } from '../services/auth';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styles: ``,
  templateUrl: './login.html',
})
export class Login {
  user = new User();
  erreur = 0;

  constructor(private authService: Auth, private router: Router) {}

  onLoggedin() {
    let isValidUser: Boolean = this.authService.SignIn(this.user);

    if (isValidUser)
      this.router.navigate(['/']);
    else
      this.erreur = 1;
  }
}