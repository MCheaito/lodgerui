import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'rx-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent{

    @Input() bookings;
    @Input() selectedBooking;

    @Output() onSelect = new EventEmitter();
    @Output() onDelete = new EventEmitter();

    delete($event, booking) {
        $event.stopPropagation();
        this.onDelete.emit(booking);
    }


}
