import { Action } from '@ngrx/store';

import { Event } from './event.model';
import { EventState } from './event.state';

export const ADD_EVENT = 'ADD_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';
export const DUPLICATE_EVENT = 'DUPLICATE_EVENT';
export const FILTER_EVENTS = 'FILTER_EVENTS';
export const GET_EVENTS = 'GET_EVENTS';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const SEARCH_EVENTS = 'SEARCH_EVENTS';
export const TOGGLE_EVENT_DETAILS = 'TOGGLE_EVENT_DETAILS';

export class AddEvent implements Action {
  readonly type = ADD_EVENT;

  constructor(public payload: string) {}
}

export class DeleteEvent implements Action {
  readonly type = DELETE_EVENT;

  constructor(public payload: string) {}
}

export class DuplicateEvent implements Action {
  readonly type = DUPLICATE_EVENT;

  constructor(public payload: string) {}
}

export class FilterEvents implements Action {
  readonly type = FILTER_EVENTS;

  constructor(public payload: string) {}
}

export class GetEvents implements Action {
  readonly type = GET_EVENTS;
}

export class GetEventsSuccess implements Action {
  readonly type = GET_EVENTS_SUCCESS;

  constructor(public payload: EventState[]) {}
}

export class SearchEvents implements Action {
  readonly type = SEARCH_EVENTS;

  constructor(public payload: string) {}
}

export class ToggleEventDetails implements Action {
  readonly type = TOGGLE_EVENT_DETAILS;

  constructor(public payload: string) {}
}

export type All =
AddEvent |
DeleteEvent |
DuplicateEvent |
FilterEvents |
GetEvents |
GetEventsSuccess |
SearchEvents |
ToggleEventDetails;
