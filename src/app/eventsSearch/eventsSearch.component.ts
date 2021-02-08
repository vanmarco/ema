import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { filterEvents } from '../event/event.action';
@Component({
  selector: 'events-search',
  templateUrl: 'eventsSearch.component.html'
})

export class EventsSearchComponent implements OnInit {
  keyupEvent$ = new Subject<string>();

  constructor(private store: Store) {}

  ngOnInit() {
    this.keyupEvent$.pipe(debounceTime(200)).subscribe((value) => {
      this.store.dispatch(filterEvents({filter: null, search: value}));
    });
  }
}
