import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AuthService } from '../services/auth.service';

import { RouterModule } from '@angular/router';

import { routes } from './routes';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login.form/login.form.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot (routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
