import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {BookingService} from '../_services/index';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private service: BookingService
      ) 
  { }

  ngOnInit() {
  }

}
