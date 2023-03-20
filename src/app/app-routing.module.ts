import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//component
import {EntriesComponent} from './entries/entries.component';
import {NewEntriesComponent} from './new-entries/new-entries/component';

//route
const routes: Routes = [
  {path: '', component:EntriesComponent},
  {path:'entries', component:EntriesComponent}
  {path: 'new-entry' component:NewEntriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
