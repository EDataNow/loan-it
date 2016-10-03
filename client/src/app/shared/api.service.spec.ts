import {
  inject,
  TestBed
} from '@angular/core/testing';
import { Component } from '@angular/core';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// Load the implementations that should be tested
import { ApiService } from './api.service';
import { UserService } from './user.service';


describe('Api Service', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiService,
      UserService,
      BaseRequestOptions,
      MockBackend,
      {
        provide: Http,
        useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
          return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      },
      ApiService
    ]
  }));

  it('Api Service Group URL', inject([ApiService, Http], (api) => {
    expect(api.GROUP_URL).toBe('https://loan-it.herokuapp.com/api/groups');
  }));

  it('Api Service ', inject([ApiService, Http], (api) => {
    expect(api.USER_URL).toBe('https://loan-it.herokuapp.com/api/users');
  }));


  // it('should have a title', inject([ Home ], (home: Home) => {
  //   expect(!!home.title).toEqual(true);
  // }));

  // it('should log ngOnInit', inject([ Home ], (home: Home) => {
  //   spyOn(console, 'log');
  //   expect(console.log).not.toHaveBeenCalled();

  //   home.ngOnInit();
  //   expect(console.log).toHaveBeenCalled();
  // }));

});
