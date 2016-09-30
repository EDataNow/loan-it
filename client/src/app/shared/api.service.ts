import { Injectable }    from '@angular/core';
import { RequestOptions, Headers, Http, Response } from '@angular/http';
import { Device } from './device';
import { User } from './user';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiService {

  private headers = new Headers({'Content-Type': 'application/json'});

  // private GROUP_URL = 'https://loan-it.herokuapp.com/api/groups';
  // private DEVICE_CREATION_URL = 'https://loan-it.herokuapp.com/api/devices';
  // private USER_URL = 'https://loan-it.herokuapp.com/api/users'

  private GROUP_URL = 'http://localhost:3000/api/groups';
  private DEVICE_CREATION_URL = 'http://localhost:3000/api/devices';
  private USER_URL = 'http://localhost:3000/api/users'


  constructor(private http: Http) { }

    private extractData(res: Response) {
      let body = res.json();
      return body.data || { };
    }

    obtainDevices(): Observable<Device[]> {
    return this.http.get(this.GROUP_URL)
               .map((resp: Response) => resp.json())
               .catch(this.handleError);
    }

    obtainUsers(): Observable<User[]> {
    return this.http.get(this.USER_URL)
               .map((resp: Response) => resp.json())
               .catch(this.handleError);
    }

    showDevice(id: number): Observable<Device> {
    return this.http.get(`http://localhost:3000/api/devices/${id}`)
               .map((resp: Response) => resp.json())
               .catch(this.handleError);
    }

    createDevice (name: string, group_id: number): Observable<Device> {
      let body = JSON.stringify({ name, group_id });
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.http.post(this.DEVICE_CREATION_URL, body, options)
                      .map(this.extractData)
                      .catch(this.handleError);
    }

    createLoan (id: number, signature: string, user_id: number): Observable<Device> {
      let body = JSON.stringify({ signature, user_id });
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.http.post(`http://localhost:3000/api/devices/${id}/loans`, body, options)
                      .map(this.extractData)
                      .catch(this.handleError);
    }

    relinquishLoan (id: number, loan_id: number): Observable<Device> {
      return this.http.delete(`http://localhost:3000/api/devices/${id}/loans/${loan_id}`)
                      .map(this.extractData)
                      .catch(this.handleError);
    }

    createIncidentReport (id: number, description: string, user_id: number, usable: boolean): Observable<Device> {
      let body = JSON.stringify({ description, user_id, usable});
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.http.post(`http://localhost:3000/api/devices/${id}/incident_reports`, body, options)
                      .map(this.extractData)
                      .catch(this.handleError);
    }

    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
