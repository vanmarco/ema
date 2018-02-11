import { ActionWithPayload } from '../event/event.actionWithPayload';
import { Event } from '../event/event.model';
import { defaultEventsState, defaultEventState, EventsState, EventState } from '../event/event.state';

import * as EventActions from '../event/event.action';

export type ActionWithPayload = EventActions.All;

const initialEventStates: EventState[] = [newDefaultEvent('Event title', '1')];

const initialState: EventsState = {
  events: initialEventStates,
  loading: false
};

export function eventsReducer(state = initialState, action: ActionWithPayload<EventState>) {
  const payload = String(action.payload);
  let events;

  switch (action.type) {
    case EventActions.ADD_EVENT:
      state.events.splice(state.events.length, 0, newDefaultEvent(payload, String(state.events.length + 1)));
      return state;
    case EventActions.DELETE_EVENT:
      return { ...state, events: state.events.filter((event) => event.id !== payload) };
    case EventActions.DUPLICATE_EVENT:
      const indexOfEvent = state.events.findIndex((event) => event.id === payload);
      const eventCopy = {...state.events[indexOfEvent]};
      eventCopy.id = String(state.events.length + 1);
      state.events.splice(indexOfEvent, 0, eventCopy);
      return state;
    case EventActions.FILTER_EVENTS:
      if (payload === '1') {
        events = state.events.map(
          (event) => {
            (event.ownerId === payload) ? event.filtered = true : event.filtered = false;
            return event;
          }
        );
      } else if (payload === 'all') {
        events = resetEventsFilter(state.events);
      } else {
        events = state.events.map(
          (event) => {
            (event.ownerId !== '1') ? event.filtered = true : event.filtered = false;
            return event;
          }
        );
      }
      return { ...state, events };
    case EventActions.GET_EVENTS:
      return { ...state, loading: true };
    case EventActions.GET_EVENTS_SUCCESS:
      return { events: action.payload.map((event) => event = {...event, ...defaultEventState()}), loading: false };
    case EventActions.SEARCH_EVENTS:
      if (payload) {
        const search = new RegExp(payload, 'i');
        return { ...state, events: state.events.map(
          (event) =>  {
            event.filtered = (
              event.title.search(search) === -1 &&
              event.location.search(search) === -1 &&
              event.description.search(search) === -1
            ) ? false : true;
            return event;
          }
        )};
      }
      return { ...state, events: resetEventsFilter(state.events) };
    case EventActions.TOGGLE_EVENT_DETAILS:
      events = state.events.map((event) => {
        if (event.id === payload) {
          return {...event, details: !event.details};
        } else {
          return event;
        }
      });
      return { events, loading: false };
    default:
      return state;
  }
}

function newDefaultEvent(title, id) {
  return {
    id,
    ...new Event(title),
    ...defaultEventState()
  };
}

function resetEventsFilter(events) {
  return events.map(
    (event) => {
      event.filtered = true;
      return event;
    }
  );
}
