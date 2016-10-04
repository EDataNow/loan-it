import { inject, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { BaseRequestOptions, ConnectionBackend, Http, RequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Router, RouterOutlet, RouterLink, RouterModule } from '@angular/router';

// Load the implementations that should be tested
import { UserService } from './user.service';


describe('UserService', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UserService,
      BaseRequestOptions,
      MockBackend,
      { provide: Router, useClass: RouterModule},
      {
        provide: Http,
        useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
          return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      },
    ],
  }));

 it('#isLoggedIn should return false after creation', inject([UserService], (service) => {
    expect(service.isLoggedIn()).toBeFalsy();
  }));
});
