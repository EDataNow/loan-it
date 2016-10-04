import {
	fakeAsync,
  inject,
  TestBed
} from '@angular/core/testing';
import { Component } from '@angular/core';
import {
	RequestMethod,
  BaseRequestOptions,
  ConnectionBackend,
  Http,
  Response,
  ResponseOptions,
} from '@angular/http';
import { MockBackend, MockConnection,  } from '@angular/http/testing';

// Load the implementations that should be tested
import { ApiService } from './api.service';
import { UserService } from './user.service';
import { Device } from './device';
import { User } from './user';




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

  it('Api Service USER URL', inject([ApiService, Http], (api) => {
    expect(api.USER_URL).toBe('https://loan-it.herokuapp.com/api/users');
  }));

  it('should use an HTTP call to obtain Devices',
    inject(
      [ApiService, MockBackend],
      fakeAsync((api: ApiService, backend: MockBackend) => {
        backend.connections.subscribe((connection: MockConnection) => {

          expect(connection.request.method).toBe(RequestMethod.Get);
          expect(connection.request.url).toBe(
            'https://loan-it.herokuapp.com/api/groups');
        });

        api.obtainDevices();
      })));

  it('should use an HTTP call to obtain Users',
    inject(
      [ApiService, MockBackend],
      fakeAsync((api: ApiService, backend: MockBackend) => {
        backend.connections.subscribe((connection: MockConnection) => {

          expect(connection.request.method).toBe(RequestMethod.Get);
          expect(connection.request.url).toBe(
            'https://loan-it.herokuapp.com/api/users');
        });

        api.obtainUsers();
      })));

  it('should check to obtainUsers() response > 0 (a.k.a has data)',
    inject(
      [ApiService, MockBackend],
      fakeAsync((api: ApiService, backend: MockBackend) => {
        backend.connections.subscribe((connection: MockConnection) => {
          expect(Response.length).toBeGreaterThan(0);
        });

        api.obtainUsers();
      })));

  // it('should check to obtainUsers() response > 0 (a.k.a has data)',
  //   inject(
  //     [ApiService, MockBackend],
  //     fakeAsync((api: ApiService, backend: MockBackend) => {
  //       backend.connections.subscribe((connection: MockConnection) => {

  //       new mockResponseBody: User[] = [{
  //         id: 1,
  //         name: 'Saim',
  //         email: 'saim@saim.com'
  //       }];

  //       let response = new ResponseOptions({body: JSON.stringify(mockResponseBody)});
  //       connection.mockRespond(new Response(response));
  //     });
  //       api.obtainUsers()
  //          .subscribe(User => {
  //         expect(User).toContain('Saim');
  //       });
  //     })));


  // it('should parse the server response correctly', inject(
  //   [ApiService, MockBackend],
  //   fakeAsync((api: ApiService, backend: MockBackend) => {
  //     backend.connections.subscribe((connection: MockConnection) => {

  //       new mockResponseBody: Device[] = [{
  //         id: 1,
  //         name: 'Testing IR Control'
  //       }];

  //       let response = new ResponseOptions({body: JSON.stringify(mockResponseBody)});
  //       connection.mockRespond(new Response(response));
  //     });

  //     api.showDevice(86)
  //       .subscribe(device => {
  //         expect(device.name).toEqual('Testing IR Control');
  //         expect(device.id).toEqual(86);
  //       });
  //   })));

});