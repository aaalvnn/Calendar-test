import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {ExhibitionsComponent} from "./components/exhibitions/exhibitions.component";

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'exhibitions', component: ExhibitionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
