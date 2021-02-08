import { v4 as uuid } from 'uuid';
export class Event {
  id: string;
  title: string;
  description: string;
  dateStart: Date;
  dateEnd: Date;
  location: string;
  ownerId: string;

  constructor(title: string) {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.id = uuid();
    this.title = title;
    this.description = 'Default event description';
    this.dateStart = today;
    this.dateEnd = tomorrow;
    this.location = 'Bratislava';
    this.ownerId = '1'; // Assign all new events to current user
  }
}
