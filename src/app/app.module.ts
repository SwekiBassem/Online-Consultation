import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConsultationComponent } from './consultation/consultation.component';
import { NewpatientComponent } from './newpatient/newpatient.component';
import { OldpatientComponent } from './oldpatient/oldpatient.component'; // Import HttpClientModule

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultationComponent,
    NewpatientComponent,
    OldpatientComponent,
    HomeComponent,
    NavbarComponent,
    NavbarComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
