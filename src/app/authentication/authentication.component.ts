import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {LodgerUser} from './LodgerUser';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers: [AuthenticationService]
})

export class AuthenticationComponent implements OnInit {

public user = new LodgerUser('','');
public errorMsg = '';

  constructor(private _service:AuthenticationService) 
  {
   
   }

  ngOnInit() {
    this._service.checkCredentials();
  }

  logout()
  {
    this._service.logout();
  }

  login() {
    
      if(!this._service.login(this.user))
      {
          this.errorMsg = 'Failed to login';
      }
  }

   isAuthenticated() : boolean
   {
      return this._service.isAuthenticated(); 
   }

}
