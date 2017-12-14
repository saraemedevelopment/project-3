import { Component, OnInit, Input } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { ReviewsService } from '../../services/reviews.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-new-review',
  templateUrl: './new.review.component.html',
  styleUrls: ['./new.review.component.css']
})
export class NewReviewComponent implements OnInit {
  @Input() place: any;
  review: any;
  text: string;
  rating: number;

  constructor(public reviewsService: ReviewsService, public placesService: PlacesService, public router: Router, public route: ActivatedRoute) { }

  submit(text, rating) {
    console.log(text, rating, this.place._id)

    this.review = this.reviewsService.create({ text, rating }, this.place._id).subscribe();


  }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   console.log('AAAAAAAAAAAA ' + params['id'])
    //   this.reviewsService.findPlaceByID(params['id'])
    //     .map(place => this.place = place)
    //     .subscribe()
    // })
  }

}
