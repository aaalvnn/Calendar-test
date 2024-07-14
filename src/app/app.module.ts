import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RightBarComponent} from "./components/right-bar/right-bar.component";
import {HeaderComponent} from "./components/header/header.component";
import {ExhibitionsComponent} from "./components/exhibitions/exhibitions.component";
import {FullCalendarModule} from "@fullcalendar/angular";
import {DropdownComponent} from "./components/dropdown/dropdown.component";
import {SearchComponent} from "./components/search/search.component";

@NgModule({
  declarations: [
    AppComponent,
    RightBarComponent,
    HeaderComponent,
    ExhibitionsComponent,
    DropdownComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
