import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';


@Component({
  selector: 'app-new.place.form',
  templateUrl: './new.place.form.component.html',
  styleUrls: ['./new.place.form.component.css']
})
export class NewPlaceFormComponent implements OnInit {

  place:any;

  constructor(public placeService: PlacesService) { }

  create(name, description, category) {
    console.log({name, description, category})
    this.place= this.placeService.create({name, description, category}).subscribe();
      
    }

  ngOnInit() {
  }

}
