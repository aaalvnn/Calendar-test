import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Exhibition } from '../../services/exhibition.service';

@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.scss']
})
export class EventDialogComponent implements OnChanges {
  @Input() eventData: Partial<Exhibition> = {};
  @Output() saveEvent = new EventEmitter<Partial<Exhibition>>();
  @Output() deleteEvent = new EventEmitter<void>();
  @Output() cancelEvent = new EventEmitter<void>();

  eventForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.eventForm = this.fb.group({
      id: [''],
      title: [''],
      date: [''],
      venue: ['']
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['eventData']) {
      this.eventForm.patchValue(this.eventData || { id: '', title: '', date: '', venue: '' });
    }
  }

  onSave(): void {
    if (this.eventForm.value.id) {
      this.saveEvent.emit(this.eventForm.value);
    } else {
      const newEvent = this.eventForm.value;
      delete newEvent.id;  // Ensure id is not sent when creating a new event
      this.saveEvent.emit(newEvent);
    }
  }

  onDelete(): void {
    this.deleteEvent.emit();
  }

  onCancel(): void {
    this.cancelEvent.emit();
  }
}
