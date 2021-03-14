import { EventInput } from '@fullcalendar/angular';

let guidEvent = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'Timed event',
    start: TODAY_STR + 'T12:00:00'
  },
  {
    id: createEventId(),
    title: 'All-day event',
    start: TODAY_STR
  }
];

export function createEventId() {
  return String(guidEvent++);
}