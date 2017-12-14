import { Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../services/places.service';
import { NewReviewComponent } from '../new.review/new.review.component';

@Component({
  selector: 'app-place-details',
  templateUrl: './place.details.component.html',
  styleUrls: ['./place.details.component.css']
})
export class PlaceDetailsComponent implements OnInit {
  place: any;
  review: any;
  placeId: number;
  optionalParameter: string;

  showSelected: boolean;

  constructor(private router: Router, 
    private route: ActivatedRoute, 
    public placeService: PlacesService) {
    this.showSelected = false;
  }

  ShowButton() {
    this.showSelected = true;
  }
  HideButton() {
    this.showSelected = false;
  }

  getPlaceDetails(id, param) {
    this.router.navigate(['place', id]);
    let contador = 0;
    let sumrating = 0;

  };



  ngOnInit() {
    this.route.params.subscribe(params => {
      this.placeService.getPlaceByID(params['id'])
        .subscribe(place => { this.place = place });
    })
  }

}
