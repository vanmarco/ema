import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'event-add',
  templateUrl: 'eventAdd.component.html'
})

export class EventAddComponent {
  @Output() addSubmit = new EventEmitter<any>();
}
