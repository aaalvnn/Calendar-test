import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';

import {RightBarComponent} from "./components/right-bar/right-bar.component";
import {HeaderComponent} from "./components/header/header.component";
import {ExhibitionsComponent} from "./components/exhibitions/exhibitions.component";
import {DropdownComponent} from "./components/dropdown/dropdown.component";
import {SearchComponent} from "./components/search/search.component";
import {EventDialogComponent} from "./components/event-dialog/event-dialog.component";
import {VenuesComponent} from "./components/venues/venues.component";
import {HomeComponent} from "./home/home.component";
import {VenueService} from "./services/venue.service";
import {ExhibitionService} from "./services/exhibition.service";
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
    RightBarComponent,
    HeaderComponent,
    ExhibitionsComponent,
    DropdownComponent,
    SearchComponent,
    EventDialogComponent,
    VenuesComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FullCalendarModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [VenueService, ExhibitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
