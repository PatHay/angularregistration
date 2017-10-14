import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  submitted = false;

  user = { 
    first_name: '',
    last_name: '',
    email: '',
    pw: '',
    confirm_pw: '',
    street: '',
    unit: '',
    city: '',
    states: '',
    lucky: ''
  };
  users = [];

  onSubmit(){
    this.submitted = true;
    this.users.push(this.user);
    this.user = { first_name: '',
    last_name: '',
    email: '',
    pw: '',
    confirm_pw: '',
    street: '',
    unit: '',
    city: '',
    states: '',
    lucky: ''
   };
  }

}
