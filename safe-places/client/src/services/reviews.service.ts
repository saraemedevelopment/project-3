import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment }  from '../environments/environment';

const  BASE_DOMAIN:string= environment.baseurl;

@Injectable()
export class ReviewsService {
  place = {
    id: ''  }

  BASE_URL: string = `${BASE_DOMAIN}/api/review`;
  private options = {withCredentials:true};
  
  constructor(private http: Http) { }

  findPlaceByID(id): Observable<any>{
    let placeId = id._value.placeid
    console.log(placeId);
      return this.http.get(`${BASE_DOMAIN}/api/places/${this.place.id}`, this.options)
                  .map(res => res.json());

  }

 
  create(review, placeId) {
    console.log(placeId)
    return this.http.post(`${this.BASE_URL}/${placeId}`, review, this.options)
      .map((res) => res.json());

  }

 
}

