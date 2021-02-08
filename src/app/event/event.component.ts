import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { deleteEvent, duplicateEvent } from './event.action';
import { Event } from './event.model';
@Component({
  selector: 'event',
  styleUrls: ['./event.component.scss'],
  templateUrl: './event.component.html'
})

export class EventComponent implements OnInit {
  @Input() event: Event;
  eventClass = {};
  detailsVisible = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
    // Set event HTML classes object according to its start and end dates
    const today = new Date();
    const dateStart = new Date(this.event.dateStart);
    const dateEnd = new Date(this.event.dateEnd);
    const ongoing = (dateStart <= today && dateEnd >= today);
    const past = (dateEnd < today);
    const future = (dateStart > today);
    this.eventClass = { ongoing, past, future };
  }

  duplicate() {
    this.store.dispatch(duplicateEvent({id: this.event.id}));
  }

  delete() {
    this.store.dispatch(deleteEvent({id: this.event.id}));
  }

  toggleDetails() {
    this.detailsVisible = !this.detailsVisible;
  }
}
