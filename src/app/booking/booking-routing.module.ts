import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }  from '@angular/router';
import {BookingComponent} from './booking.component';
import {BookingListComponent} from './booking-list.component';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild([
    {path: '', component: BookingComponent},
    {path: ':id', component: BookingComponent},
    {path: 'search', component: BookingListComponent}
  
    ])
  ],
  declarations: []
})
export class BookingRoutingModule { }
