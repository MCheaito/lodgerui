import { ShowMessageService } from './_services/show-message.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
   './app.component.css'
  ]
})
export class AppComponent {

  constructor(private showMessageSvc: ShowMessageService)
  {
    showMessageSvc.message="Hello World!";
    showMessageSvc.title="Bienvenue!";

  }
}



       
