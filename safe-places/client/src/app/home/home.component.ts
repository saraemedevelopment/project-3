import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  places: Array<any> = [];

  constructor(public placesService: PlacesService,) { }

  ngOnInit() {

    this.placesService.getList()
    .map(list => this.places = list)
    .subscribe()
  }

}
