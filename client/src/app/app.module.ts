import './rxjs-extensions';

import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import 'materialize-css';
import {MaterializeDirective} from 'angular2-materialize';


import { AppComponent } from './app.component';
import { DeviceComponent } from './devices/device.component';
import { BrokenDeviceComponent } from './devices/broken_device.component';
import { CreateDeviceComponent } from './devices/create_device.component';
import { CreateLoanComponent } from './devices/create_loan.component';
import { ShowDeviceComponent } from './devices/show_device.component';
import { RelinquishLoanComponent } from './devices/relinquish_loan.component';
import { IncidentReportComponent } from './devices/incident_report.component';
import { CreateIncidentReportComponent } from './devices/create_incident_report.component';
import { LoanHistoryComponent } from './devices/loan_history.component';
import { UsersComponent } from './devices/users.component'


import { LoginComponent } from './login.component';

import { LoginCheck } from './login.check';
import { LoggedInGuard } from './logged-in.guard';
import { ApiService, UserService } from './shared';

import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    MaterializeDirective,
    DeviceComponent,
    BrokenDeviceComponent,
    LoginComponent,
    CreateDeviceComponent,
    CreateLoanComponent,
    ShowDeviceComponent,
    RelinquishLoanComponent,
    IncidentReportComponent,
    CreateIncidentReportComponent,
    LoanHistoryComponent,
    UsersComponent
  ],
  providers: [
    ApiService, LoggedInGuard, UserService, LoginCheck
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
