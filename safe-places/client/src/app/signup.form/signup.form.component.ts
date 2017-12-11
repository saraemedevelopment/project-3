import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

interface SignupForm{
  username:string;
  password:string;
}

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup.form.component.html',
  styleUrls: ['./signup.form.component.css']
})
export class SignupFormComponent implements OnInit {
formInfo : SignupForm ={
  username:"",
  password:""
}
  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

  signup(){
    const {username, password} = this.formInfo;
    if(username != "" && password != ""){
      console.log(`Signup with ${username} ${password}`)
      this.auth.signup(username, password)
      .map(user => console.log(user))
      .subscribe();
    } else{
      console.log("You must set a username and a password");
    }
  }

}
