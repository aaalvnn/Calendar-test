import { Component, OnInit } from '@angular/core';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { ExhibitionService, Exhibition } from '../../services/exhibition.service';

@Component({
  selector: 'app-exhibitions',
  templateUrl: './exhibitions.component.html',
  styleUrls: ['./exhibitions.component.scss'],
})
export class ExhibitionsComponent implements OnInit {
  showModal = false;
  showDeleteModal = false;
  selectedEvent: Partial<Exhibition> = {};

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'addEventButton'
    },
    customButtons: {
      addEventButton: {
        text: 'Створити',
        click: this.openAddEventDialog.bind(this)
      }
    },
    events: [],
    eventClick: this.handleEventClick.bind(this)
  };

  constructor(private exhibitionService: ExhibitionService) {}

  ngOnInit(): void {
    this.loadExhibitions();
  }

  loadExhibitions(): void {
    this.exhibitionService.getExhibitions().subscribe((data: Exhibition[]) => {
      this.calendarOptions = {
        ...this.calendarOptions,
        events: data.map(exhibition => ({
          id: exhibition.id,
          title: exhibition.title,
          date: exhibition.date,
          description: exhibition.venue
        }))
      };
    });
  }

  openAddEventDialog(): void {
    this.selectedEvent = {};
    this.showModal = true;
  }

  openEditEventDialog(event: Partial<Exhibition>): void {
    this.selectedEvent = { ...event };
    this.showModal = true;
  }

  openDeleteEventDialog(event: Partial<Exhibition>): void {
    this.selectedEvent = { ...event };
    this.showDeleteModal = true;
  }

  handleEventClick(arg: EventClickArg): void {
    this.openEditEventDialog({
      id: arg.event.id,
      title: arg.event.title,
      date: arg.event.startStr,
      venue: arg.event.extendedProps['description']
    });
  }

  onSaveEvent(eventData: Partial<Exhibition>): void {
    if (eventData.id) {
      this.exhibitionService.updateExhibition(eventData.id, eventData as Exhibition).subscribe(() => {
        this.loadExhibitions();
      });
    } else {
      this.exhibitionService.addExhibition(eventData as Exhibition).subscribe(() => {
        this.loadExhibitions();
      });
    }
    this.showModal = false;
  }

  onDeleteEvent(): void {
    this.showModal = false;
    this.showDeleteModal = true;
  }

  onConfirmDelete(): void {
    if (this.selectedEvent.id) {
      this.exhibitionService.deleteExhibition(this.selectedEvent.id).subscribe(() => {
        this.loadExhibitions();
      });
    }
    this.showDeleteModal = false;
  }

  onCancelEvent(): void {
    this.showModal = false;
    this.showDeleteModal = false;
  }
}
