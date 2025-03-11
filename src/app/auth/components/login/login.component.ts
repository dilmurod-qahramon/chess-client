import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { catchError, EMPTY } from 'rxjs';
import { Roles } from '../../../core/types/roles.enum';

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
      .pipe(
        catchError(() => {
          alert('Invalid login, please enter correct credentials');
          return EMPTY;
        })
      )
      .subscribe((res) => {
        this.tokenService.setAccessToken(res.accessToken);
        this.tokenService.setRefreshToken(res.refreshToken);
        if (res.roles.includes(Roles.Admin)) {
          this.router.navigate(['history']);
        } else {
          this.router.navigate(['chess']);
        }
      });
  }
}
