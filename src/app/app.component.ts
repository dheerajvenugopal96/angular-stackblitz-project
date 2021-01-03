import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Product Management app';

  constructor(private _authService: AuthService, private _route: Router) {}

  get isLoggedIn(): boolean {
    return this._authService.isLoggedIn;
  }

  get userName(): string {
    return this._authService.currentUser.username;
  }

  logout(): void {
    this._authService.logout();
    this._route.navigateByUrl('/welcome');
  }
}
