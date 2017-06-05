import { Component, OnInit } from '@angular/core';
import { config} from '../config';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
appName:string;
  constructor() 
    {
      this.appName=config.appName;
     }

  ngOnInit() {
  }

}
