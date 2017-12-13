import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { FileSelectDirective, FileUploader } from "ng2-file-upload";



@Component({
  selector: 'app-new.place.form',
  templateUrl: './new.place.form.component.html',
  styleUrls: ['./new.place.form.component.css']
})
export class NewPlaceFormComponent implements OnInit {
  uploader:FileUploader = new FileUploader({  
    url: `http://localhost:3000/api/places/`
  });

  place:any;

  feedback: string;

  constructor(public placeService: PlacesService) { }

  create(name, description, category, uploader) {
    this.uploader.onBuildItemForm = (item, form) => {
    console.log({name, description, category, })
    this.place= this.placeService.create({name, description, category, uploader}).subscribe();
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
