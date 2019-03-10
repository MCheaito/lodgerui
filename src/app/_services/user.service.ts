import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from './authentication.service';
import { User } from '../_models/index';

@Injectable()

export class UserService {
    constructor(
        private http: HttpClient,
        private authenticationService: AuthenticationService) {
    }

    getUsers(): Observable<User[]> {
        // add authorization header with jwt token
        let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.authenticationService.token });
       // let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get<User[]>('/api/users');
    }
}