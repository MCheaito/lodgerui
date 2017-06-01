import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {Booking} from './booking.model';
import {Guid} from '../utils/Guid';
import {BookingService} from './booking.service';
import {Promotions} from '../utils/promotions';
import {BookingTypes} from '../utils/bookingTypes';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent implements OnInit {
promotionList:Promotions[];
bookingTypesList: BookingTypes[];
messages:string[];
booking: Booking;
  constructor(
 
      private route: ActivatedRoute,
      private router: Router,
      private _service:BookingService) { 
  this.route.params
    //(+) converts string 'id' to a number
    .switchMap((params: Params) => this._service.getBooking(params['id']))
    .subscribe((booking: Booking) => this.booking = booking);

     }

  ngOnInit() {
     this._service.getListOfPromotions()
     .then(promo => this.promotionList= promo);

     this._service.getListOfBookingTypes()
     .then(types=>this.bookingTypesList = types);

  } 

  submitForm(myForm:NgForm) {
 //alert(JSON.stringify(myForm.value));
 //alert(JSON.stringify(this.booking));
//alert(JSON.stringify(this.promotionList));

// this.booking.remarks=JSON.stringify(this.booking);
 }

}
