import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {BookingActions} from '../actions/booking-action';
import * as _ from 'lodash';
import { Booking } from './../../_models/booking.model';
import {Guid}   from '../../utils/guid';

export type BookingState = Booking;

const initialState: BookingState = {
    bookingGuid:'',
    name:'',
    type:'B',
    arrival:null,
    departure:null,
    roomCount:0,
    adultCount:0,
    childCount :0,
    promotionCode:'',
    companyName:'',
    remarks:'',
    referenceNumber:Guid.newGuid(),
    email :'',
    phoneNumber:'',
    typeOfLocation:''
};


export default function (state = initialState, action: Action): BookingState {
    switch (action.type) {
        case BookingActions.RESET_BLANK_BOOKING: {
            return initialState;
        }
        case BookingActions.GET_BOOKING_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}