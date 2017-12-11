import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  user:object;
  constructor(private auth:AuthService) {
    this.auth.loginEvent.subscribe( user =>{
      this.user = user;
    })
  }

  ngOnInit() {
  }

}
