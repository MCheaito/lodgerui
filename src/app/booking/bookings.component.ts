import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';

import { BookingActions } from './../_redux/actions/booking-action';
import { Booking } from './../_models/booking.model';
import {AppState} from '../_redux/reducers';
import { BookingListComponent } from './booking-list.component';


@Component({
  selector: 'rx-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
    bookings: Observable<any>;
    addingBooking = false;
    selectedBooking;
    constructor(
        private store: Store<AppState>,
        private bookingActions: BookingActions,
        private router: Router
    ) {
        this.bookings = store.select('bookings');
    }

    ngOnInit() {
        this.store.dispatch(this.bookingActions.loadBookings());
    }

    delete(booking:Booking) {
        this.store.dispatch(this.bookingActions.deleteBooking(booking));
    }

     select(booking) {
        this.selectedBooking = booking;
        this.addingBooking = false;
    }
    edit(booking){
       alert(booking.name);
    }
}

     /*addHero() {
        this.addingHero = true;
        this.selectedHero = null;
    }

    close() {
        this.addingHero = false;    
    }
    gotoDetail() {
        this.router.navigate(['/detail/', this.selectedHero.id]);
    }*/


