import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login.form/login.form.component';

import { AuthService } from '../services/auth.service';
import { PlacesService } from '../services/places.service';

import { RouterModule } from '@angular/router';

import { routes } from './routes';



@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot (routes)
  ],
  providers: [AuthService, PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
