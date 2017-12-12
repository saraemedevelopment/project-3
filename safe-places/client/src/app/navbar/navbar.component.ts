import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categories = [
    "Bares y restaurantes",
    "Centros educativos",
    "Centros deportivos",
    "Centros médicos",
    "Comercios",
    "Centros de ocio",
    "Mayores",
    "Otros"
  ];
  
  selectedCategory: string;

  user:object;
  constructor(private auth:AuthService) {
    this.auth.loginEvent.subscribe( user =>{
      this.user = user;
    })
  }

  logout() {
    this.auth.logout().subscribe();
  }

  ngOnInit() {
  }

}
