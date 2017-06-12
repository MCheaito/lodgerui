import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {config} from '../config';
import {Booking,BookingTypes,Promotions} from '../_models/index';
import {HttpService} from './http.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookingService {
 private apiJsonUrl = 'assets/data/';  // URL to web api
 private apiUrl = config.url+'api/booking';  // URL to web api

  constructor(private _http:HttpService) {  

  }

  getListOfPromotions():Promise<Promotions[]>{
    return this._http.get(config.apiJsonUrl+'promotions-list.json')
                .toPromise() 
               .then(res =>  res.json().data as Promotions[]);
} 

getListOfBookingTypes():Promise<BookingTypes[]> {
    return this._http.get(config.apiJsonUrl+'booking-types-list.json')
                .toPromise()
                .then(res =>  res.json().data as BookingTypes[]);
}

getBooking(id:string):Promise<Booking>
{
  const url = `${this.apiUrl}/${id}`;
//const url = `${this.apiUrl}/booking-test.json`;
 var resultats=  this._http
                    .get(url)
                    .map(this.extractData)
                    .toPromise()
                    .then(this.extractBookingData)
                    .catch(this.handleError);
  //              .toPromise()
   //             .then(res =>  res.json().data as Booking[]);

  return resultats;
}

searchBooks(queryTitle: string): Observable<Booking[]> {
  return this._http.get(`${this.apiUrl}?q=${queryTitle}`)
    .map(res => res.json().items || []);
}

getAllBooking(): Observable<Booking[]> {
return this._http.get(`${this.apiUrl}/all`)
.map(res => res.json());
}

    deleteBooking(booking) {
        return this._http.delete(`${this.apiUrl}/` + booking.bookingGuid)
        .map(res => booking);
    }


/*getBooking(id:string)
{
  const url = `${this.apiUrl}/${id}`;
return   this._http
                    .get(url)
                    .map((res) => {return res.json(); } );

  
}*/

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
