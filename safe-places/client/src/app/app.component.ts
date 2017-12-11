import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.auth.logout().subscribe();
  }

  // loggedin(){
  //     this.auth.isLoggedIn().subscribe();
  //     }

};
