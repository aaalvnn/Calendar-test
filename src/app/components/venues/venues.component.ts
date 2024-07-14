import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VenueService, Venue } from '../../services/venue.service';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.scss']
})
export class VenuesComponent {
  venueForm: FormGroup;

  constructor(private fb: FormBuilder, private venueService: VenueService, protected router: Router) {
    this.venueForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onSave(): void {
    if (this.venueForm.valid) {
      const newVenue: Venue = this.venueForm.value;
      this.venueService.addVenue(newVenue).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
