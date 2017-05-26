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
booking: Booking ;


  constructor() { 
    this.booking = new Booking();
    this.booking.title='sddddddddddddd';
    this.booking.bookingGuid = Guid.newGuid();

    
  }

  ngOnInit() {
  }

  submitForm(myForm:NgForm) {
 alert(JSON.stringify(myForm.value));
 alert(JSON.stringify(this.booking));
 }

}
