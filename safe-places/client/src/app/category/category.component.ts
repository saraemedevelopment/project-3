import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

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

  place: any;
  optionalParameter: string;

  constructor(private router: Router, private route: ActivatedRoute, public placeService: PlacesService) { 
      route.params.subscribe(params => {
      this.placeService.getPlaceByCat(params['categoria'])
        .subscribe(place => this.place = place);
    })
  
  }

  ngOnInit() {
    this.route.params
    .subscribe((params) => {params['categoria']});

this.route.queryParams
    .subscribe((queryParams) => {
      this.optionalParameter = queryParams['foo'];
  });

    // this.places= this.placeService.getList()
  }

}
