import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

// const DOMAIN = "http://localhost:3000";
// const BASE_URL = `${DOMAIN}/api/places`;

@Injectable()
export class PlacesService {
 BASE_URL: string = 'http://localhost:3000/api/places';
      constructor(private http: Http) {}

      getList() {
        return this.http.get(`${this.BASE_URL}`)
          .map((res) => res.json());
      }

      getPlaceByID(id: number) {
        return this.http.get(`${this.BASE_URL}/${id}`)
          .map((res) => res.json());
      }

      create(place) {
        console.log("funcion del servicio");
        return this.http.post(`${this.BASE_URL}`, place)
          .map((res) => res.json());
          
      }

      edit(place) {
        return this.http.put(`${this.BASE_URL}/${place.id}`, place)
          .map((res) => res.json());
      }

      remove(id) {
        return this.http.delete(`${this.BASE_URL}/${id}`)
          .map((res) => res.json());
      }
  }
