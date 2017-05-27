import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from './authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers: [AuthenticationService]
})

export class AuthenticationComponent implements OnInit {

  constructor(private _service:AuthenticationService) { }

  ngOnInit() {
    this._service.checkCredentials();
  }

  logout()
  {
    this._service.logout();
  }

}
