import { Component, OnInit, AfterViewChecked, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
//todo ajouter les validatore 
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {Guid} from '../utils/Guid';
import {BookingService} from '../_services/index';
import {Promotions,BookingTypes,Booking} from '../_models/index';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent implements OnInit {
promotionList:Promotions[];
bookingTypesList: BookingTypes[];
messages:string[];
booking: Booking;

 bookingForm: NgForm;
  @ViewChild('bookingForm') currentForm: NgForm;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private _service:BookingService) 
  { 

    this.booking = new Booking();
    /*
    this.route.params
    //(+) converts string 'id' to a number
    .switchMap((params: Params) => this._service.getBooking(params['id']))
    .subscribe((booking: Booking) => this.booking = booking);
*/
   }

  ngOnInit() {
    /*
     this._service.getListOfPromotions()
     .then(promo => this.promotionList= promo);

     this._service.getListOfBookingTypes()
     .then(types=>this.bookingTypesList = types);*/

  } 

  submitForm(myForm:NgForm) {
    // this.booking.remarks=JSON.stringify(this.booking);
 }

   ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    if (this.currentForm === this.bookingForm) { return; }
    this.bookingForm = this.currentForm;
    if (this.bookingForm) {
      this.bookingForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }

  onValueChanged(data?: any) {
    if (!this.bookingForm) { return; }
    const form = this.bookingForm.form;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'bookingTitle': ''
  };

  validationMessages = {
    'bookingTitle': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 4 characters long.',
      'maxlength':     'Name cannot be more than 24 characters long.'
    }
  };

}
