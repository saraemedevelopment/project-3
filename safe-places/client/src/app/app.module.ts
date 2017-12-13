import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './routes';
import { RouterModule } from '@angular/router';

// const bootstrapConfig = require('bootstrap-config');
// bootstrapConfig('./config.json', './variables.less');

import { AgmCoreModule } from '@agm/core';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login.form/login.form.component';
import { SignupFormComponent } from './signup.form/signup.form.component';

import { AuthService } from '../services/auth.service';
import { PlacesService } from '../services/places.service';
import { IsLoggedInService } from '../services/isLoggedIn.canactivate.service';
import { ListPlacesComponent } from './list.places/list.places.component';
import { PlaceDetailsComponent } from './place.details/place.details.component';
import { MapsComponent } from './maps/maps.component';
import { NewPlaceFormComponent } from './new.place.form/new.place.form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { FileSelectDirective } from "ng2-file-upload";


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    HomeComponent,
    ListPlacesComponent,
    PlaceDetailsComponent,
    MapsComponent,
    NewPlaceFormComponent,
    NavbarComponent,
    CategoryComponent,
    FileSelectDirective
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyAVoWvBDqi00cVfhe2OESObMg3QJvJE02A',
      libraries: ["places"]
    })
  ],
  providers: [AuthService, PlacesService, IsLoggedInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
