//import '@ngrx/core/add/operator/select';
import {compose} from '@ngrx/core/compose';
import {combineReducers} from '@ngrx/store';

import bookingListReducer, * as fromBookingList from './booking-list';

export interface AppState {
bookings: fromBookingList.BookingListState;
//hero: fromHero.HeroState;
};

export default compose(combineReducers)({
bookings: bookingListReducer
//,hero: heroReducer
});




