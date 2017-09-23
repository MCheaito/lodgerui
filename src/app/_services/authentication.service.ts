
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { config } from '../config'


@Injectable()
export class AuthenticationService {
  public token: string;

  constructor(private http: Http) {

    // set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem(config.authTokenName));

    this.token = currentUser && currentUser.token;

  }

  logout() {
    // localStorage.removeItem("user");
    //this._router.navigate(['Login']);
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem(config.authTokenName);
  }

  login(username: string, password: string): Observable<boolean> {
    //      return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', username);
    urlSearchParams.append('password', password);
    const body = urlSearchParams.toString();

    return this.http.post(config.url + 'token/login.php', body, { headers: headers })
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json(); //&& response.json().token;
        if (token) {
          // set token property
          this.token = token;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          //localStorage.setItem(config.authTokenName, JSON.stringify({ username: username, token: token }));
          localStorage.setItem(config.authTokenName, JSON.stringify(token));

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });
  }

  /*   login(user:LodgerUser){
      var authenticatedUser = users.find(u => u.email === user.email);
  
      if (authenticatedUser && authenticatedUser.password === user.password){
  
        localStorage.setItem("user", JSON.stringify(authenticatedUser));
        this._router.navigate(['home']); 
  
        return true;
      }
      return false;
     }
  
  
     isAuthenticated(): boolean{
       //TODO: verifier si l'usager connecté  ou non
       return localStorage.getItem(config.authTokenName)!= null;
    } 
  */

}
