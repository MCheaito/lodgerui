import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Booking} from './booking.model';
import {Guid} from '../utils/Guid';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent implements OnInit {
booking: Booking;


  constructor() { 
    this.booking = new Booking();
    this.booking.title="";
    this.booking.bookingGuid = Guid.newGuid();
    this.booking.type="B";
    this.booking.title ="";
    this.booking.roomCount=1,
    this.booking.adultCount=1 ,
    this.booking.childrenCount=0;
    this.booking.promotionCode="";
    this.booking.companyName="";
    this.booking.remarks="";
    this.booking.referenceNumber="";
    this.booking.email="";
    this.booking.phoneNumber="";
    this.booking.typeOfLocation="" ;
     }

  ngOnInit() {
  }

  submitForm(myForm:NgForm) {
 //alert(JSON.stringify(myForm.value));
 alert(JSON.stringify(this.booking));
 this.booking.remarks="Donnn!!";
 }

}
