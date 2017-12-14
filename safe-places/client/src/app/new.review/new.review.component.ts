import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { ReviewsService } from '../../services/reviews.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-new-review',
  templateUrl: './new.review.component.html',
  styleUrls: ['./new.review.component.css']
})
export class NewReviewComponent implements OnInit {
  place: any;
  review: any;
  text: string;
  rating: number;

  constructor(public reviewsService: ReviewsService, public placesService: PlacesService, public router: Router, public route: ActivatedRoute) { }



  submit(text, rating) {
    console.log(text, rating, this.place)

    this.review = this.reviewsService.create({ text, rating }).subscribe();


  }

  
  ngOnInit() {

    this.reviewsService.findPlaceByID(this.route.params)
      .subscribe(place => this.place = place);

  }

}
