import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import * as EventAction from '../event/event.action';
import { EventsState, EventState } from '../event/event.state';

@Component({
  selector: 'events',
  templateUrl: 'events.component.html'
})

export class EventsComponent implements OnInit {
  constructor(private store: Store<EventsState>) {}

  eventsState$: Observable<EventState[]>;

  // Load events from JSON file
  ngOnInit() {
    this.eventsState$ = this.store.select((state) => state.events);
    this.store.dispatch(new EventAction.GetEvents());
  }

  // Toggle event details by event id
  onToggleEventDetails(id) {
    this.store.dispatch(new EventAction.ToggleEventDetails(id));
  }

  // Handle duplicate event by event id
  onDuplicateEvent(id) {
    this.store.dispatch(new EventAction.DuplicateEvent(id));
  }

  // Handle delete of event by event id
  onDeleteEvent(id) {
    this.store.dispatch(new EventAction.DeleteEvent(id));
  }

  // Filter events by owner - after change of filter select
  onEventsFilterChange(event) {
    const filter = event.target.value;
    this.store.dispatch(new EventAction.FilterEvents(filter));
  }

  // Search events on keyup event on search input
  onEventsSearchChange(event) {
    const search = event.target.value;
    this.store.dispatch(new EventAction.SearchEvents(search));
  }

  // Handle new event form submit
  onAddSubmit(ngForm) {
    const title = ngForm.form.value.eventTitle;
    this.store.dispatch(new EventAction.AddEvent(title));
  }
}
