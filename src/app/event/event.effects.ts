import { environment } from '../../environments/environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as EventActions from './event.action';
import { EventState } from './event.state';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventEffects {
  constructor(private http: HttpClient, private actions$: Actions) {}

  // Download JSON file with events and trigger success action
  // TODO - catch errors
  @Effect()
  GetEvents$: Observable<Action> = this.actions$.ofType<EventActions.GetEvents>(EventActions.GET_EVENTS)
  .mergeMap(
    (action) => this.http.get('events.json').map((data) => new EventActions.GetEventsSuccess(data as EventState[]))
  );
}
