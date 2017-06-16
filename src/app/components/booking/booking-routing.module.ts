import { HomeComponent } from './../home/home.component';
import { BookingsComponent } from './bookings.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule }  from '@angular/router';
import {BookingDetailComponent} from './booking-detail.component';
import {BookingListComponent} from './booking-list.component';


const routes: Routes = [
  { path: '',    component: BookingListComponent },
  { path: 'add', component: BookingDetailComponent }
  // { path: ':id', component: BookingDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class BookingRoutingModule { }
