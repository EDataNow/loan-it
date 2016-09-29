import './rxjs-extensions';

import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {QRCodeComponent} from 'angular2-qrcode';

import { AppComponent } from './app.component';
import { DeviceComponent } from './devices/device.component';
import { BrokenDeviceComponent } from './devices/broken_device.component';
import { CreateDeviceComponent } from './devices/create_device.component';
import { CreateLoanComponent } from './devices/create_loan.component';
import { ShowDeviceComponent } from './devices/show_device.component';
import { RelinquishLoanComponent } from './devices/relinquish_loan.component';
import { IncidentReportComponent } from './devices/incident_report.component';


import { LoginComponent } from './login.component';

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
    DeviceComponent,
    BrokenDeviceComponent,
    LoginComponent,
    CreateDeviceComponent,
    CreateLoanComponent,
    ShowDeviceComponent,
    RelinquishLoanComponent,
    IncidentReportComponent,
    QRCodeComponent
  ],
  providers: [
    ApiService, LoggedInGuard, UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
