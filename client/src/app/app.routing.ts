import { RouterModule, Routes } from '@angular/router';

import { DeviceComponent } from './devices/device.component'
import { BrokenDeviceComponent } from './devices/broken_device.component'
import { CreateDeviceComponent } from './devices/create_device.component'
import { CreateLoanComponent } from './devices/create_loan.component'
import { ShowDeviceComponent } from './devices/show_device.component'
import { LoginComponent } from './login.component';
import { RelinquishLoanComponent } from './devices/relinquish_loan.component';
import { IncidentReportComponent } from './devices/incident_report.component';
import { CreateIncidentReportComponent } from './devices/create_incident_report.component';
import { LoanHistoryComponent } from './devices/loan_history.component';


import { LoggedInGuard } from './logged-in.guard';
import { LoginCheck } from './login.check';

const routes: Routes = [
  { path: '', redirectTo: '/devices', pathMatch: 'full' },
  { path: 'devices', component: DeviceComponent},
  { path: 'brokendevices', component: BrokenDeviceComponent},
  { path: 'createdevice', component: CreateDeviceComponent },
  { path: 'device/:id', component: ShowDeviceComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginCheck] },
  { path: 'device/:id/createloan', component: CreateLoanComponent },
  { path: 'device/:id/relinquishloan/:loan_id', component: RelinquishLoanComponent },
  { path: 'device/:id/incidentreports', component: IncidentReportComponent},
  { path: 'device/:id/createincidentreport', component: CreateIncidentReportComponent},
  { path: 'device/:id/loanhistory', component: LoanHistoryComponent}
];

export const routing = RouterModule.forRoot(routes);
