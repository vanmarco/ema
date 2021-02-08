import { createAction, props } from '@ngrx/store';

import { Event } from '../event/event.model';

export const addEvent = createAction(
  'AddEvent',
  props<{title: string}>()
);

export const deleteEvent = createAction(
  'DeleteEvent',
  props<{id: string}>()
);

export const duplicateEvent = createAction(
  'DuplicateEvent',
  props<{id: string}>()
);

export const filterEvents = createAction(
  'FilterEvents',
  props<{filter?: string, search?: string}>()
);

export const getEvents = createAction(
  'GetEvents'
);

export const getEventsSuccess = createAction(
  'GetEventsSuccess',
  props<{events: Event[]}>()
);
