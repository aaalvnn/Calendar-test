import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VenueService, Venue } from '../../services/venue.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  venues: Venue[] = [];
  selectedVenue: string | null = null;

  @Output() venueChanged = new EventEmitter<string>();

  constructor(private venueService: VenueService) {}

  ngOnInit(): void {
    this.loadVenues();
  }

  loadVenues(): void {
    this.venueService.getVenues().subscribe((venues: Venue[]) => {
      this.venues = venues;
      if (venues.length > 0) {
        this.selectedVenue = venues[0].id || null;
        if (this.selectedVenue) {
          this.emitVenueChange(this.selectedVenue);
        }
      }
    });
  }

  onVenueChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const venueId = target.value;
    this.emitVenueChange(venueId);
  }

  emitVenueChange(venueId: string): void {
    this.selectedVenue = venueId;
    this.venueChanged.emit(this.selectedVenue);
  }
}
