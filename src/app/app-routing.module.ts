import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {ExhibitionsComponent} from "./components/exhibitions/exhibitions.component";
import {VenuesComponent} from "./components/venues/venues.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'exhibitions', component: ExhibitionsComponent },
  { path: 'venues', component: VenuesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
