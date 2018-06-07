import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TitlepageComponent } from './titlepage/titlepage.component';
import { ResumepageComponent } from './resumepage/resumepage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { InfopageComponent } from './infopage/infopage.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProjectpageComponent } from './projectpage/projectpage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitlepageComponent,
    ResumepageComponent,
    ContactpageComponent,
    InfopageComponent,
    ProjectpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
