import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService
      .register({
        username: this.username,
        password: this.password,
        email: this.email,
      })
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(['auth']);
      });
  }
}
