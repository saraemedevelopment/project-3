import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categoria = [
    "Bares y restaurantes",
    "Centros educativos",
    "Centros deportivos",
    "Centros médicos",
    "Comercios",
    "Centros de ocio",
    "Mayores",
    "Otros"
  ];

  url = [
    "bares-restaurantes",
    "centros-educativos",
    "centros-deportivos",
    "centros-medicos",
    "comercios",
    "centros-de-ocio",
    "mayores",
    "otros"
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
