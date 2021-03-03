import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../rest-api.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  btnDisabled = false;

  constructor(
    private router: Router,
    private rest: RestApiService,
    private data: DataService
  ) { }

  ngOnInit() {
  }

  validate() {
    if (this.username) {
      if (this.password) {
        return true;
      } else {
        this.data.error('Password is not entered!');
      }
    } else {
      this.data.error('Login is not entered!');
    }
  }

  async login() {
    this.btnDisabled = true;
    try {
      if (this.validate()) {
        const data = await this.rest.post(
          'http://localhost:8080/api/auth/signin',
          {
            username: this.username ,
            password: this.password
          }
        );

        if (data['success']) {
          localStorage.setItem('accessToken', data['accessToken']);
          await this.data.getProfile();
          this.router.navigate(['']);
        } else {
          this.data.error(data['message']);
        }
      }
    } catch (error) {
      this.data.error(error['message']);
    }

    this.btnDisabled = false;

  }


  MenuPage(){
      this.router.navigateByUrl('');
  }

}



