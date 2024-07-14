import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { EventDialogComponent } from './event-dialog.component';

describe('EventDialogComponent', () => {
  let component: EventDialogComponent;
  let fixture: ComponentFixture<EventDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventDialogComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EventDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a form with title, date, and venue controls', () => {
    expect(component.eventForm.contains('title')).toBeTruthy();
    expect(component.eventForm.contains('date')).toBeTruthy();
    expect(component.eventForm.contains('venue')).toBeTruthy();
  });

  it('should emit saveEvent on save', () => {
    spyOn(component.saveEvent, 'emit');

    component.eventForm.setValue({ id: '', title: 'Test', date: '2024-07-20', venue: '1' });
    component.onSave();

    expect(component.saveEvent.emit).toHaveBeenCalledWith({ id: '', title: 'Test', date: '2024-07-20', venue: '1' });
  });

});
