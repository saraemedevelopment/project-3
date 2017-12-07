import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-list-places',
  templateUrl: './list.places.component.html',
  styleUrls: ['./list.places.component.css']
})
export class ListPlacesComponent implements OnInit {

  constructor(public placeService: PlacesService) { }

  getList() {
    this.placeService.getList().subscribe();
  }

  ngOnInit() {
  }


}
