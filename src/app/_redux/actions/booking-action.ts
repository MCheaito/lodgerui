import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Booking } from '../../_models/booking.model';

@Injectable()

export class BookingActions {
  static LOAD_BOOKINGS = '[Booking] Load Bookings';
  loadBookings(): Action {
      return {
      type: BookingActions.LOAD_BOOKINGS
      };
  }

  static LOAD_BOOKINGS_SUCCESS = '[Booking] Load Bookings Success';
  loadBookingsSuccess(bookings): Action {
    return {
    type: BookingActions.LOAD_BOOKINGS_SUCCESS,
    payload: bookings
    };
  }

    static DELETE_BOOKING = '[Booking] Delete Booking';
    deleteBooking(booking): Action {
        return {
            type: BookingActions.DELETE_BOOKING,
            payload: booking
        };
    }

    static DELETE_BOOKING_SUCCESS = '[Booking] Delete Booking Success';
    deleteBookingSuccess(booking): Action {
        return {
            type: BookingActions.DELETE_BOOKING_SUCCESS,
            payload: booking
        };
    }


}



