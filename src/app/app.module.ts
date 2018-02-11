import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { EventEffects } from './event/event.effects';
import { EventAddComponent } from './eventAdd/eventAdd.component';
import { EventsComponent } from './events/events.component';
import * as eventsReducer from './events/events.reducer';
import { EventsFilterComponent } from './eventsFilter/eventsFilter.component';
import { EventsSearchComponent } from './eventsSearch/eventsSearch.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    EventComponent,
    EventAddComponent,
    EventsComponent,
    EventsFilterComponent,
    EventsSearchComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    EffectsModule.forRoot([EventEffects]),
    FormsModule,
    StoreModule.forRoot({events: eventsReducer.eventsReducer}),
    HttpClientModule
  ],
  providers: [
    ErrorHandler
  ]
})

export class AppModule { }
