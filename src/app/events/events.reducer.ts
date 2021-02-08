import { Action, createReducer, on } from '@ngrx/store';
import { v4 as uuid } from 'uuid';

// UNUSED: import { ActionWithPayload } from '../event/event.actionWithPayload';
import { Event } from '../event/event.model';

import * as EventActions from '../event/event.action';
export interface EventsState {
  activeFilter: string;
  activeSearch: string;
  events: Event[];
  loading: boolean;
}

const initialEventsState: EventsState = {
  activeFilter: 'all',
  activeSearch: '',
  events: [
    new Event('Event title')
  ],
  loading: false
};

const eventsReducer = createReducer(
  initialEventsState,

  on(
    EventActions.addEvent,
    (state, { title }) => {
      state.events.splice(state.events.length, 0, new Event(title));
      return { ...state };
    }
  ),

  on(
    EventActions.deleteEvent,
    (state, { id }) => {
      const deleteAllIndex = state.events.findIndex((event) => event.id === id);
      state.events.splice(deleteAllIndex, 1);
      return { ...state };
    }
  ),

  on(
    EventActions.duplicateEvent,
    (state, { id }) => {
      const indexInevents = state.events.findIndex((event) => event.id === id);
      const eventCopy = {
        ...state.events[indexInevents],
        title: state.events[indexInevents].title + ' (copy)'
      };
      eventCopy.id = uuid();
      state.events.splice(indexInevents, 0, eventCopy);

      return { ...state };
    }
  ),

  on(
    EventActions.filterEvents,
    (state, { filter, search }) => {
      const newFilter = filter == null ? state.activeFilter : filter;
      const newSearch = search == null ? state.activeSearch : search;

      return {
        ...state,
        activeFilter: newFilter,
        activeSearch: newSearch
      };
    }
  ),

  on(EventActions.getEvents, (state) => ({ ...state, loading: true })),
  on(EventActions.getEventsSuccess, (state, { events }) => ({ ...state, events, loading: false }))
);

export function reducer(state = initialEventsState, action: Action) {
  return eventsReducer(state, action);
}
