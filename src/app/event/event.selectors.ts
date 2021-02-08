import { createSelector } from '@ngrx/store';

import { Event } from '../event/event.model';

function sortByDate(a: Event, b: Event) {
  const dateA = (new Date(a.dateStart)).getTime();
  const dateB = (new Date(b.dateStart)).getTime();

  if (dateA < dateB) {
    return -1;
  }

  if (dateA > dateB) {
    return 1;
  }

  return 0;
}

function searchEvent(event: Event, searchString: string): boolean {
  if (!searchString) {
    return true;
  }

  const searchExp = new RegExp(searchString, 'i');

  return (
    event.title.search(searchExp) === -1 &&
    event.location.search(searchExp) === -1 &&
    event.description.search(searchExp) === -1
  ) ? false : true;
}

function filterEvent(event: Event, filter: string): boolean {
  if (filter === 'all') {
    return true;
  } else if (filter === 'other') {
    return event.ownerId !== '1';
  } else {
    return event.ownerId === filter;
  }
}

export const newEvents = createSelector(
  (state) => state,
  (state: any) => state.events.events
    .filter((event: Event) => (new Date(event.dateEnd)).getTime() >= (new Date()).getTime())
    .filter(
      (event: Event) => {
        const isSearched = searchEvent(event, state.events.activeSearch);
        const isFiltered = filterEvent(event, state.events.activeFilter);
        return isSearched && isFiltered;
      }
    )
    .sort(sortByDate)
);

export const pastEvents = createSelector(
  (state) => state,
  (state: any) => state.events.events
    .filter((event: Event) => (new Date(event.dateEnd)).getTime() < (new Date()).getTime())
    .filter(
      (event: Event) => {
        const isSearched = searchEvent(event, state.events.activeSearch);
        const isFiltered = filterEvent(event, state.events.activeFilter);
        return isSearched && isFiltered;
      }
    )
    .sort(sortByDate)
    .reverse()
)
