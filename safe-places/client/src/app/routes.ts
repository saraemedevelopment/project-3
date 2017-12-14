import { Routes } from '@angular/router';
import { LoginFormComponent } from './login.form/login.form.component';
import { SignupFormComponent } from './signup.form/signup.form.component';
import { HomeComponent } from './home/home.component';
import { ListPlacesComponent } from './list.places/list.places.component';
import { PlaceDetailsComponent } from './place.details/place.details.component';
import { NewPlaceFormComponent } from './new.place.form/new.place.form.component';
import { CategoryComponent } from './category/category.component';
import { NewReviewComponent } from './new.review/new.review.component';


import { AuthService } from '../services/auth.service';
import { PlacesService } from '../services/places.service';
import { IsLoggedInService } from '../services/isLoggedIn.canactivate.service';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'places', component: ListPlacesComponent },
  { path: 'places/:id', component: PlaceDetailsComponent },
  { path: 'places/cat/:url', component: CategoryComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'new-place', component: NewPlaceFormComponent },
  { path: 'new-review/:id', component: NewReviewComponent }
];
