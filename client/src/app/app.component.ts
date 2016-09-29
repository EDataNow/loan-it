import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './shared/user.service';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userName = localStorage['user_name'] 
  
  constructor(private userService: UserService, private router: Router) { }
}