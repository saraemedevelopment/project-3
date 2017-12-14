
import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/Rx';

import { environment }  from '../environments/environment';

const  BASE_DOMAIN:string= environment.baseurl;


const BASEURL = BASE_DOMAIN + "/auth";
// const BASEURL = `${BASE_DOMAIN}/auth`;

@Injectable()
export class AuthService {

  public user:object;
  public userLoginEvent:EventEmitter<any> = new EventEmitter<any>();
  public options = {withCredentials:true};

  loginEvent:EventEmitter<object> = new EventEmitter();
  

  constructor(public http: Http) {
    this.isLoggedIn().subscribe();
  }

    public getLoginEventEmitter():EventEmitter<any>{
      return this.userLoginEvent;
    }

    public getUser(){
      return this.user;
    }

    public emitUserLoginEvent(user){
      this.user = user;
      this.userLoginEvent.emit(user);
      return user;
    }

    public handleError(e) {
      console.log("AUTH ERROR");
      return Observable.throw(e.json().message);
    }

    handleUser(obj) {
      this.user = obj;
      this.loginEvent.emit(this.user);
      return this.user;
    }

    signup(username,password) {
      console.log("entro la funcion");
      return this.http.post(`${BASEURL}/signup`, {username,password}, this.options)
        .map(res => res.json())
        .map(user => this.emitUserLoginEvent(user))
        .catch(this.handleError);
    }

    login(username,password) {
      return this.http.post(`${BASEURL}/login`, {username,password}, this.options)
        .map(res => res.json())
        .map(user => this.emitUserLoginEvent(user))
        .catch(this.handleError);
    }

    logout() {
      console.log("logout llamada")
      return this.http.get(`${BASEURL}/logout`, this.options)
        .map(res => res.json())
        .map(user => this.emitUserLoginEvent(null))
        .catch(this.handleError);

    }

    isLoggedIn() {
      return this.http.get(`${BASEURL}/loggedin`, this.options)
        .map(res => res.json())
        .map(user => this.emitUserLoginEvent(user))
        .catch(this.handleError);
    }
}
