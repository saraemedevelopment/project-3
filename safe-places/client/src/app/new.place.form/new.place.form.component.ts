import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { FileSelectDirective, FileUploader } from "ng2-file-upload";



@Component({
  selector: 'app-new.place.form',
  templateUrl: './new.place.form.component.html',
  styleUrls: ['./new.place.form.component.css']
})
export class NewPlaceFormComponent implements OnInit {

  categories = [
    "Bares y restaurantes",
    "Centros educativos",
    "Centros deportivos",
    "Centros médicos",
    "Comercios",
    "Centros de ocio",
    "Mayores",
    "Otros"
  ];

  url = [
    "bares-restaurantes",
    "centros-educativos",
    "centros-deportivos",
    "centros-medicos",
    "comercios",
    "centros-de-ocio",
    "mayores",
    "otros"
  ];

  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/new-place/${this.place._id}`
  });

  place: any;

  feedback: string;

  constructor(public placeService: PlacesService) { }

  create(name, description, category, uploader) {
    console.log(name, description, category, uploader)
    this.uploader.onBuildItemForm = (item, form) => {
      this.place = this.placeService.create({ name, description, category, uploader }).subscribe();
    };

    this.uploader.uploadAll();
  }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };
  }

}
