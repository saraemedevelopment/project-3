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
    "bares-restaurantes",
    "centros-educativos",
    "centros-deportivos",
    "centros-médicos",
    "comercios",
    "centros-de-ocio",
    "mayores",
    "otros"
  ];

  places: any;
  category: string;
  optionalParameter: string;

  constructor(private router: Router, 
    private route: ActivatedRoute, 
    public placeService: PlacesService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.placeService.getPlaceByCat(params['url'])
        .map(places => this.places = places)
        .subscribe()
    })
  }

}
