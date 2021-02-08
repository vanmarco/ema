


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import { Event } from '../event/event.model';
import { getEvents, getEventsSuccess } from './event.action';

@Injectable()
export class EventEffects {

  // Download JSON file with events and trigger success action
  // TODO - catch errors
  getEvents$ = createEffect(() => this.actions$.pipe(
    ofType(getEvents),
    mergeMap(() => this.http.get('events.json').pipe(
      map((data) => getEventsSuccess({ events: data as Event[]}))
    ))
  ));

  constructor(private http: HttpClient, private actions$: Actions) {}
}
