import { Event } from './event.model';

export interface EventState extends Event {
  details: boolean;
  filtered: boolean;
}

export const defaultEventState = function() {
  return {
    details: false,
    filtered: true
  };
};

export interface EventsState {
  events: EventState[];
  loading: boolean;
}

export const defaultEventsState = function() {
  return {
    events: [],
    loading: false
  };
};
