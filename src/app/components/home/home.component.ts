import { ShowMessageService } from './../../_services/show-message.service';
import { ModalService } from './../../_services/modal.service';
import { Component, OnInit } from '@angular/core';
import { options } from '../../_models/index';
import { config } from "../../config";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
appName:string;
  showDialog = false;
  
   constructor(private messageService: ShowMessageService) {
    this.appName = config.appName;
  }

    ngOnInit() {
        
    }

    openModal(){
 
        this.messageService.visible= true;
        this.messageService.title = "Test home component message text"; 
        this.messageService.message=`<h2>Page Content</h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. 
                Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis 
                dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. 
                Aliquam in felis sit amet augue.
                <br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. 
                Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis 
                dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. 
                Aliquam in felis sit amet augue.
                <br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. 
                Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis 
                dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. 
                Aliquam in felis sit amet augue.`;
    }



}
