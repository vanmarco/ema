import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { filterEvents } from '../event/event.action';

@Component({
  selector: 'events-filter',
  templateUrl: 'eventsFilter.component.html'
})

export class EventsFilterComponent {
  constructor(private store: Store) {}

  filter(event) {
    const filter = event.target.value;
    this.store.dispatch(filterEvents({filter, search: null}));
  }
}
