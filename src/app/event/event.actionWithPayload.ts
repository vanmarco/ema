import { Action } from '@ngrx/store';
import { EventState } from './event.state';

export interface ActionWithPayload<EventState> extends Action {
  payload: EventState[];
}
