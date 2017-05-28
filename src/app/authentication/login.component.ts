import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {LodgerUser} from './LodgerUser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]    
})

export class LoginComponent implements OnInit {

public user = new LodgerUser('','');
    public errorMsg = '';
 
    constructor(
        private _service:AuthenticationService) {}
 
  login() {
      if(!this._service.login(this.user)){
          this.errorMsg = 'Failed to login';
      }
  }

  ngOnInit() {
  }

}
