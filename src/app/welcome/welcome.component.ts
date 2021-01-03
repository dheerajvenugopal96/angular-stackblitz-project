import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: [],
})
export class WelcomeComponent implements OnInit {
  title: string = 'WELCOME';

  welcomeImage: string = 'assets/images/starter.jpg';

  constructor() {}

  ngOnInit(): void {}
}
