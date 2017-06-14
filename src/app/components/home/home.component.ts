import { ModalService } from './../../_services/modal.service';
import { Component, OnInit } from '@angular/core';
import { options } from '../../_models/index';
import { config } from "../../config";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['app.less','./home.component.less']
})
export class HomeComponent implements OnInit {
appName:string;

   constructor(private modalService: ModalService) {
    this.appName = config.appName;
  }

    ngOnInit() {
        
    }

    openModal(id: string){
 
        this.modalService.open(id);
    }

    closeModal(id: string){
        this.modalService.close(id);
    }

}
