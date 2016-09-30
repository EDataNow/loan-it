import { Component, OnInit } from '@angular/core';
import { Device } from '../shared/device';
import { User } from '../shared/user';
import { ApiService } from '../shared';
import { Router, ActivatedRoute, Params } from '@angular/router';



// import '../style/app.scss';

@Component({
  selector: 'create-incident-report',
  templateUrl: './create_incident_report.component.html',
  styleUrls: ['./device.component.scss'],
})
export class CreateIncidentReportComponent implements OnInit {
  all_groups: Device[] = [];
  user_id: number;
  device_id: number;
  isUsable = true;

  ngOnInit() {
    this.api.obtainDevices()
        .subscribe((data: Device[]) => this.all_groups = data);

    this.user_id = localStorage['user_id'];

    this.route.params.forEach((params: Params) => {
     this.device_id = +params['id']; // (+) converts string 'id' to a number
    });
  }

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) {
    // Do something with api
  }

  createIncidentReport(description: string, usable: boolean) {
    this.api.createIncidentReport(this.device_id, description, this.user_id, this.isUsable)
                     .subscribe(
                       device  => this.all_groups.push(device));
    this.router.navigate(['/device/' + this.device_id + '/incidentreports']);
  }
}