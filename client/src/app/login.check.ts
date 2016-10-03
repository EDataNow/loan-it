import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from './shared/user.service';

import { Router } from '@angular/router';


@Injectable()
export class LoginCheck implements CanActivate {
    constructor(private user: UserService, private router: Router) {}

    canActivate() {
          if (this.user.isLoggedIn()) {
            this.router.navigateByUrl("/devices", { skipLocationChange: true } )
            return false;
        } else
        {
            return true;
        }
    }
}
