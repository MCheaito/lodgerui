import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

import {Promotions} from '../utils/promotions';
import {BookingTypes} from '../utils/bookingTypes';
import {Booking} from '../_models/booking.Model';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookingService {
 private apiJsonUrl = 'assets/data/';  // URL to web api

 private apiUrl = 'http://localhost:5000/api/booking';  // URL to web api

  constructor(private http:Http) {  }

  getListOfPromotions():Promise<Promotions[]> {
    return this.http.get(this.apiJsonUrl+'promotions-list.json')
                .toPromise() 
                .then(res =>  res.json().data as Promotions[]);
}

getListOfBookingTypes():Promise<BookingTypes[]> {
    return this.http.get(this.apiJsonUrl+'booking-types-list.json')
                .toPromise()
                .then(res =>  res.json().data as BookingTypes[]);
}

getBooking(id:string):Promise<Booking>
{
  const url = `${this.apiUrl}/${id}`;
//const url = `${this.apiUrl}/booking-test.json`;
 var resultats=  this.http
                    .get(url)
                    .map(this.extractData)
                    .toPromise()
                    .then(this.extractBookingData)
                    .catch(this.handleError);
  //              .toPromise()
   //             .then(res =>  res.json().data as Booking[]);

  return resultats;
}
private extractData(res: Response) {
  let data = res.json();
  
  return data || { };
}
private extractBookingData(res: any) {
  let data = res as Booking;
  
  return data || { };
}
private extractJsonData(res: Response) {
  let body = res.json();
  return body.data || { };
}
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
