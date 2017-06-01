import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import {BookingRoutingModule} from './booking-routing.module';
import {BookingComponent} from './booking.component';
import {BookingListComponent} from './booking-list.component';
import {BookingService} from './booking.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BookingRoutingModule  // doit etre la
  ],
  declarations: [
    BookingComponent, 
    BookingListComponent
    ],
  providers: [ BookingService ]
})
export class BookingModule { }
