import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {


  constructor() { }

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  ngOnInit() {
  }

}

