import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

//services
import {EntryService} from './entry.service';
//material design
import {BrowserAnimationsModule} from '@angular/platform-browser/animation';
import {MatButtonModule, MatInputModule, MatCardModule, MatSelectModule, MatToolbarModule, MatDialogModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import { NewEntriesComponent } from './new-entries/new-entries.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UpdateEntryComponent } from './update-entry/update-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    FooterComponent,
    HeaderComponent,
    NewEntriesComponent,
    UpdateEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //material design
    BrowserAnimationModule, MatButtonModule, MatTableModule, ReactiveFormsModule, MatInputModule,MatToolbarModule, MatCardModule, MatSelectModule,MatDialogModule,
  ],
  entryComponents:[updateEntryComponent],
  providers: [
    EntryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
