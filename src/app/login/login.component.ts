import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  pageTitle = 'Log In';
  errorMessage: string;

  constructor(private _authService: AuthService, private _route: Router) {}

  login(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      const username = loginForm.form.value.uname;
      const password = loginForm.form.value.pass;
      this._authService.login(username, password);

      if (this._authService.redirectUrl) {
        this._route.navigateByUrl(this._authService.redirectUrl);
      } else {
        this._route.navigate(['/productList']);
      }
    } else {
      this.errorMessage = 'Please enter a username and password';
    }
  }

  ngOnInit(): void {}
}
