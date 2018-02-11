import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'events-search',
  templateUrl: 'eventsSearch.component.html'
})

export class EventsSearchComponent {
  @Output() searchChange = new EventEmitter<any>();
}
