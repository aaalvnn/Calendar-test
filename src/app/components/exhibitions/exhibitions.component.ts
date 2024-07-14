import { Component } from '@angular/core';
import {CalendarOptions} from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-exhibitions',
  templateUrl: './exhibitions.component.html',
  styleUrls: ['./exhibitions.component.scss'],
})
export class ExhibitionsComponent {
  title = 'Calendar-test';

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    headerToolbar: {
      left: 'prev',
      center: 'title',
      right: 'next today'
    },
    events: [
      { title: 'Event 1', date: '2024-07-20' },
      { title: 'Event 2', date: '2024-07-22' }
    ]
  };
}
