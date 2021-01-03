import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: User;
  redirectUrl: string;

  constructor() {}

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  login(username: string, password: string): void {
    if (username == 'admin' && password == 'admin') {
      this.currentUser = {
        id: 1,
        username: username,
        isAdmin: true,
      };
    } else {
      this.currentUser = {
        id: 2,
        username: username,
        isAdmin: false,
      };
    }
  }

  logout(): void {
    this.currentUser = null;
  }
}
