import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-place-details',
  templateUrl: './place.details.component.html',
  styleUrls: ['./place.details.component.css']
})
export class PlaceDetailsComponent implements OnInit {
  place:any;
 placeId: number;
 optionalParameter: string;

  constructor( private router: Router, private route: ActivatedRoute, public placeService: PlacesService)  {
    route.params.subscribe(params => {
      this.placeService.getPlaceByID(params['id'])
        .subscribe(place => this.place = place);
    })
  }

  getPlaceDetails(id, param) {
    this.router.navigate(['place', id], { queryParams: { foo: param }});

     };

ngOnInit() {
  this.route.params
       .subscribe((params) => {
         this.placeId = +params['id'];
     });

  this.route.queryParams
       .subscribe((queryParams) => {
         this.optionalParameter = queryParams['foo'];
     });


}

}
