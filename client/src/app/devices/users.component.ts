import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { ApiService } from '../shared';

@Component({
  selector: 'users', // <my-app></my-app>
  templateUrl: './users.component.html',
  styleUrls: ['./device.component.scss'],
})
export class UsersComponent implements OnInit {
  all_users: User[] = [];

  ngOnInit() {
    this.api.obtainUsersIndex()
        .subscribe((data: User[]) => this.all_users = data);
  }

  constructor(private api: ApiService) {
    // Do something with api
  }

}
