import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Promotions} from '../utils/promotions';
import {BookingTypes} from '../utils/bookingTypes';
import {Booking} from './booking.Model';

import 'rxjs/Rx';

@Injectable()
export class BookingService {
 private apiUrl = 'assets/data/';  // URL to web api

  constructor(private http:Http) {  }

  getListOfPromotions():Promise<Promotions[]> {
    return this.http.get(this.apiUrl+'promotions-list.json')
                .toPromise() 
                .then(res =>  res.json().data as Promotions[]);
}

getListOfBookingTypes():Promise<BookingTypes[]> {
    return this.http.get(this.apiUrl+'booking-types-list.json')
                .toPromise()
                .then(res =>  res.json().data as BookingTypes[]);
}

getBooking(id:string):Promise<Booking>
{
 return this.http.get(this.apiUrl+'booking-test.json')
                .toPromise()
                .then(res =>  res.json().data as Booking);
}


}
