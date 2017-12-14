import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment }  from '../environments/environment';

const  BASE_DOMAIN:string= environment.baseurl;

@Injectable()
export class PlacesService {
  
  BASE_URL: string = `${BASE_DOMAIN}/api/places`;
  private options = {withCredentials:true};
  
  constructor(private http: Http) { }

  getList() {
    return this.http.get(`${this.BASE_URL}`, this.options)
      .map((res) => res.json());
  }

  getPlaceByID(id: number) {
    return this.http.get(`${this.BASE_URL}/${id}`, this.options)
      .map((res) => res.json());
  }

  // por categorias-----------
  getPlaceByCat(url: string) {
    return this.http.get(`${this.BASE_URL}/cat/${url}`, this.options)
      .map((res) => res.json());
  }

  create(place) {
    console.log(place)
    return this.http.post(`${this.BASE_URL}`, place, this.options)
      .map((res) => res.json());

      
  }

  edit(place) {
    return this.http.put(`${this.BASE_URL}/${place.id}`, place, this.options)
      .map((res) => res.json());
  }

  remove(id) {
    return this.http.delete(`${this.BASE_URL}/${id}`, this.options)
      .map((res) => res.json());
  }
}
