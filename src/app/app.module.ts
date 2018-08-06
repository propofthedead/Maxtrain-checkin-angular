import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassesComponent } from './classes/classes.component';
import { StudentsComponent } from './students/students.component';
import { CheckInComponent } from './Students/check-in/check-in.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    StudentsComponent,
    CheckInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
