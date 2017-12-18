import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {BookingActions} from '../actions/booking-action';
import * as _ from 'lodash';

import { Booking } from './../../_models/booking.model';

export type BookingListState = Booking[];

const initialState: BookingListState = [];

export default function (state = initialState, action: Action): BookingListState {
//     switch (action.type) {
//         case BookingActions.LOAD_BOOKINGS_SUCCESS: {
//             return action.payload;
//         }
//   /*      case BookingActions.ADD_BOOKING_SUCCESS: {
//             return [...state, action.payload];
//         }
//         case BookingActions.SAVE_HERO_SUCCESS: {
//             let index = _.findIndex(state, {id: action.payload.id});
//             if (index >= 0) {
//                 return [
//                     ...state.slice(0, index),
//                     action.payload,
//                     ...state.slice(index + 1)
//                 ];
//             }
//             return state;
//         }*/
//         case BookingActions.DELETE_BOOKING_SUCCESS: {
//             return state.filter(booking => {
//                 return booking.bookingGuid !== action.payload.bookingGuid;
//             });
//         }
//         default: {
//             return state;
//         }
 //   }
 return state;

}