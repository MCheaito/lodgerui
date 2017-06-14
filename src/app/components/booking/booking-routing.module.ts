import { HomeComponent } from './../home/home.component';
import { BookingsComponent } from './bookings.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }  from '@angular/router';
import {BookingDetailComponent} from './booking-detail.component';
import {BookingListComponent} from './booking-list.component';


@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild([
    {path: '', component: BookingsComponent} ,
    //{path: ':id', component: BookingDetailComponent},
    {path: 'home', component: HomeComponent}
    ])
  ],
  declarations: []
})
export class BookingRoutingModule { }
