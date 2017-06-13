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

    static GET_BOOKING ='[Booking] Get Booking';
    getBooking(id:string):Action {
        return {
            type: BookingActions.GET_BOOKING, 
            payload:id
        };
    }

    static GET_BOOKING_SUCCESS = '[Booking] Get Booking Success'
    getBookingSuccess(booking):Action {
        return {
            type:BookingActions.GET_BOOKING_SUCCESS,
            payload: booking
        };
    }

    static RESET_BLANK_BOOKING = '[Booking] Get Booking Success'
    resetBookingBlank(booking):Action {
        return {
            type:BookingActions.RESET_BLANK_BOOKING,
            payload: booking
        };
    }
}



