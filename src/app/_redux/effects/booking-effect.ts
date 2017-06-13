
import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';

import {AppState} from '../reducers';
import {BookingActions} from '../actions/booking-action';
import {BookingService} from '../../_services/booking.service';

@Injectable()
export class BookingEffects {
    constructor (
        private update$: Actions,
        private bookingActions: BookingActions,
        private svc: BookingService,
    ) {}

    @Effect() loadBookinges$ = this.update$
        .ofType(BookingActions.LOAD_BOOKINGS)
        .switchMap(() => this.svc.getAllBooking())
        .map(res => this.bookingActions.loadBookingsSuccess(res));

    @Effect() getBooking$ = this.update$
        .ofType(BookingActions.GET_BOOKING)
        .map(action => action.payload)
        .switchMap(id => this.svc.getBooking(id))
        .map(booking => this.bookingActions.getBookingSuccess(booking));
/*
    @Effect() saveBooking$ = this.update$
        .ofType(BookingActions.SAVE_HERO)
        .map(action => action.payload)
        .switchMap(booking => this.svc.saveBooking(booking))
        .map(booking => this.bookingActions.saveBookingSuccess(booking));

    @Effect() addBooking$ = this.update$
        .ofType(BookingActions.ADD_HERO)
        .map(action => action.payload)
        .switchMap(booking => this.svc.saveBooking(booking))
        .map(booking => this.bookingActions.addBookingSuccess(booking));*/

    @Effect() deleteBooking$ = this.update$
        .ofType(BookingActions.DELETE_BOOKING)
        .map(action => action.payload)
        .switchMap(id => this.svc.deleteBooking(id))
        .map(booking => this.bookingActions.deleteBookingSuccess(booking));
}

