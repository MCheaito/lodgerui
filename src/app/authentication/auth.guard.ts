import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {config} from '../config';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        if (localStorage.getItem(config.authTokenName)) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}