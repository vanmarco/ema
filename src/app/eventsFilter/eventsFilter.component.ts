import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'events-filter',
  templateUrl: 'eventsFilter.component.html'
})

export class EventsFilterComponent {
  @Output() filterChange = new EventEmitter<any>();
}
