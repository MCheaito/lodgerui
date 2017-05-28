import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Booking} from './booking.model';
import {Guid} from '../utils/Guid';
import {BookingService} from './Booking.service';
import {Promotions} from '../utils/promotions';
import {BookingTypes} from '../utils/bookingTypes';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  providers: [BookingService]
})

export class BookingComponent implements OnInit {
booking: Booking;
promotionList:Promotions[];
bookingTypesList: BookingTypes[];
messages:string[];

  constructor(private _service:BookingService) { 
    this.booking = new Booking();
    this.booking.title="";
    this.booking.bookingGuid = Guid.newGuid();
    this.booking.type="B";
    this.booking.title ="";
    this.booking.roomCount=1,
    this.booking.adultCount=1 ,
    this.booking.childCount=10;
    this.booking.promotionCode="";
    this.booking.companyName="";
    this.booking.remarks="";
    this.booking.referenceNumber="";
    this.booking.email="";
    this.booking.phoneNumber="";
    this.booking.typeOfLocation="" ;
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

 this.booking.remarks=JSON.stringify(this.booking);
 }

}
