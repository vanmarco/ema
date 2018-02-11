import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Event } from '../event/event.model';
import { EventState } from '../event/event.state';

@Component({
  selector: 'event',
  styleUrls: ['./event.component.scss'],
  templateUrl: './event.component.html'
})

export class EventComponent {
  @Input() event;

  // Used to pass events to parent component
  @Output() details = new EventEmitter<any>();
  @Output() duplicate = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  // Get event HTML classes object according to its start and end dates
  getEventClass() {
    const today = new Date();
    const dateStart = new Date(this.event.dateStart);
    const dateEnd = new Date(this.event.dateEnd);
    const ongoing = (dateStart <= today && dateEnd >= today);
    const past = (dateEnd < today);
    const future = (dateStart > today);
    return {event: true, test: true, ongoing, past, future };
  }
}
