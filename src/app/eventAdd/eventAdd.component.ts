import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { addEvent } from '../event/event.action';
@Component({
  selector: 'event-add',
  templateUrl: 'eventAdd.component.html'
})

export class EventAddComponent {
  constructor(private store: Store) {}

  submit(form) {
    const title = form.form.value.eventTitle;
    this.store.dispatch(addEvent({title}));
    form.form.controls['eventTitle'].setValue('');
  }
}
