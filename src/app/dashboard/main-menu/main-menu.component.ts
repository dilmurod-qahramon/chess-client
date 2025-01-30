import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterPlayersService } from '../services/register-players.service';

@Component({
  selector: 'app-main-menu',
  standalone: false,

  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss',
})
export class MainMenuComponent {
  username1: string | undefined;
  username2: string | undefined;

  constructor(
    private router: Router,
    private register: RegisterPlayersService
  ) {}

  startGame() {
    const reg = this.register.registerPlayers({
      username1: this.username1!,
      username2: this.username2!,
    });
    if (reg) {
      this.router.navigate(['dashboard/board'], {});
    } else {
      alert('Error registering players');
    }
  }
}
