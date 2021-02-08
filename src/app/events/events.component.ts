import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getEvents } from '../event/event.action';
import { newEvents, pastEvents } from '../event/event.selectors';

@Component({
  selector: 'events',
  templateUrl: 'events.component.html'
})

export class EventsComponent implements OnInit {
  constructor(private store: Store) {}

  events$: Observable<any>;
  pastEvents$: Observable<any>;

  ngOnInit() {
    // Select events from store
    this.events$ = this.store.select(newEvents);
    this.pastEvents$ = this.store.select(pastEvents);
    // Load events from JSON file
    this.store.dispatch(getEvents());
  }
}
