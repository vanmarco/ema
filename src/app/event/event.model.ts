export class Event {
  id: string;
  title: string;
  description: string;
  dateStart: Date;
  dateEnd: Date;
  location: string;
  ownerId: string;

  constructor(title) {
    const tommorrow = new Date();
    this.title = title;
    this.description = 'Default event description';
    this.dateStart = new Date();
    this.dateEnd = new Date(tommorrow.setDate(tommorrow.getDate() + 1));
    this.location = 'Bratislava';
    this.ownerId = '1'; // Assign all new events to current user
  }
}
