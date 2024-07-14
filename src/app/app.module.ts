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
import {HttpClientModule} from "@angular/common/http";
import {EventDialogComponent} from "./components/event-dialog/event-dialog.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RightBarComponent,
    HeaderComponent,
    ExhibitionsComponent,
    DropdownComponent,
    SearchComponent,
    EventDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FullCalendarModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
