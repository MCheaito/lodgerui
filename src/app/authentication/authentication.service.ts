import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {LodgerUser} from './LodgerUser';

var users = [
  new LodgerUser('admin','admin'),  
  new LodgerUser('user','password')
];

@Injectable()
export class AuthenticationService {

constructor(private _router:Router) { }

  logout()
  {
    localStorage.removeItem("user");
    this._router.navigate(['Login']);
  }

   login(user:LodgerUser){
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
     return localStorage.getItem("user")!= null;
  } 

  checkCredentials(){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['Login']);
    }
    else 
    {
      this._router.navigate(['home']);
    }
  } 

}
