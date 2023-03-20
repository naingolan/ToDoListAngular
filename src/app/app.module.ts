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
import {MatButtonModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //material design
    BrowserAnimationModule, MatButtonModule,
  ],
  providers: [
    EntryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
