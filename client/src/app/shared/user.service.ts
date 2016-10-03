import {Observable} from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/share';

@Injectable()
export class UserService {
    private loggedIn = false;
    public nameCollection$: Observable<any>;
    private nameCollectionObserver: any;
    private nameCollection: Array<string>;


    constructor(private http: Http, private router: Router) {
        this.loggedIn = !!localStorage.getItem('auth_token');
        this.nameCollection = new Array;

        this.nameCollection$ = new Observable(observer => {
            this.nameCollectionObserver = observer;
        }).share();
    }

    userLogin(email, password) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http
            .post(
                'https://loan-it.herokuapp.com/users/sign_in',
                JSON.stringify({ email, password }),
                { headers }
            )
            .map(res => res.json())
            .map((res) => {
                if (res.success) {
                    localStorage.setItem('auth_token', res.auth_token);
                    localStorage.setItem('user_name', res.user_name);
                    this.loggedIn = true;
                    this.nameCollection.push(res.user_name);
                    this.nameCollectionObserver.next(this.nameCollection)
            }
                return res.success;
            });
    }

    logOut() {
        localStorage.clear();
        this.loggedIn = false;
        this.nameCollection.push('');
        this.nameCollectionObserver.next(this.nameCollection);
        this.router.navigate(['login']);
    }


    isLoggedIn() {
        return this.loggedIn;
    }


    loadName() {
        this.nameCollectionObserver.next(this.nameCollection);
    }
}
