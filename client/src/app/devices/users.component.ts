import { Component, OnInit } from '@angular/core';
import { Device } from '../shared/device';
import { User } from '../shared/user';
import { ApiService } from '../shared';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { IncidentReportComponent } from './incident_report.component'

@Component({
  selector: 'users', // <my-app></my-app>
  templateUrl: './users.component.html',
  styleUrls: ['./device.component.scss'],
})
export class UsersComponent implements OnInit {
  all_groups: Device[] = [];
  all_users: User[] = [];

  ngOnInit() {
    this.api.obtainDevices()
        .subscribe((data: Device[]) => this.all_groups = data);

    this.api.obtainUsers()
        .subscribe((data: User[]) => this.all_users = data);

    console.log(this.all_users);
  }

  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) {
    // Do something with api
  }

}
