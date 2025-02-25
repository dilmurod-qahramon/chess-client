import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  onSubmit() {
    this.authService
      .login(this.username, this.password)
      .subscribe((access_token) => {
        this.tokenService.setToken(access_token);
        this.router.navigate(['chess']);
      });
  }
}
