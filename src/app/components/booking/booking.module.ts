import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import {BookingRoutingModule} from './booking-routing.module';
import {BookingDetailComponent} from './booking-detail.component';
import {BookingListComponent} from './booking-list.component';
import {BookingService} from '../../_services/index';
import {BookingsComponent} from './bookings.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BookingRoutingModule  // doit etre la
  ],
  declarations: [
    BookingDetailComponent, 
    BookingListComponent, BookingsComponent
    ],
  providers: [ BookingService ]
})
export class BookingModule { }
