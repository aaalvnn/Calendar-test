import {Component, OnInit, ViewChild} from '@angular/core';
import { ExhibitionsComponent } from '../components/exhibitions/exhibitions.component';
import {Event, NavigationEnd} from "@angular/router";
import {IStaticMethods} from "preline/preline";
import { Router } from '@angular/router';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  @ViewChild(ExhibitionsComponent) exhibitionsComponent!: ExhibitionsComponent;

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          window.HSStaticMethods.autoInit();
        }, 100);
      }
    });
  }

  onVenueChanged(venueId: string): void {
    this.exhibitionsComponent.onVenueChanged(venueId);
  }
}
