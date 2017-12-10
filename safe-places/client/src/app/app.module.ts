import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { routes } from './routes';
import { RouterModule } from '@angular/router';

// import { NO_ERRORS_SCHEMA } from '@angular/core';

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

const googleMapsCore = AgmCoreModule.forRoot({
  apiKey : 'AIzaSyAVoWvBDqi00cVfhe2OESObMg3QJvJE02A',
});

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    HomeComponent,
    ListPlacesComponent,
    PlaceDetailsComponent,
    MapsComponent
      ],

  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot (routes)
  ],
  providers: [AuthService, PlacesService, IsLoggedInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
