import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from '../_services/index';
import {User} from '../_models/index';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers: [AuthenticationService]
})

export class AuthenticationComponent implements OnInit {

model: any = {};
loading:boolean = false;
errorMsg:string = '';

  constructor( private router: Router,private _service:AuthenticationService) 
  {
   }
  ngOnInit() {
    this._service.logout();
  }

cancel()
{
    this.loading=false;
}
  login() {
    
      this.loading = true;
      this._service.login(this.model.username, this.model.password)
      .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/']);
                } else {
                    this.errorMsg = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    
  }
/*
   isAuthenticated() : boolean
   {
      return this._service.isAuthenticated(); 
   }*/

}
