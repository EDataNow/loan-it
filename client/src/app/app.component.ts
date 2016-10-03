import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './shared/user.service';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  private userNameArray: Array<string> = new Array<string>();
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.nameCollection$.subscribe(updatedName => {
      this.userNameArray = updatedName;
  });
  } 
}
