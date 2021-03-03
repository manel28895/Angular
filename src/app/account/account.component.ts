import { Component, OnInit } from '@angular/core';
import { User } from "src/app/models/User";
import { Role } from "src/app/models/Role";
import { NgForm } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { NgxSpinnerService } from 'ngx-spinner';
import { NgModule } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public role:string;
  public test:boolean;
   public messageModal: string;
   public displayMessageModal: boolean = false;
   currentSettings: any;
   id:string;
   username = '';
  email = '';
  password = '';
  phone = '';
   constructor(private router: Router, private activatedRoute: ActivatedRoute,private userService: UserService,private data: DataService,private rest: RestApiService) { 
  }

  ngOnInit() {
    
    this.data.getProfile();   
    this.id=this.data.user.id;
    this.currentSettings = Object.assign({
        password: '',
      }, this.data.user)
    
  }


    MenuPage(){
      this.router.navigateByUrl('');
  }

  addParkingPage()
  {

    this.router.navigateByUrl('addParking-page');
  }

listParking()
{

this.router.navigateByUrl('listParkings-page');
}

listReclamation()
{

this.router.navigateByUrl('listeReclamtions-page');
}


 validate(settings) {
    if (settings['username']) {
      if (settings['email']) {
        if (settings['password']) {
          if (settings['phone']) {
            return true;
          }
          else {
            this.data.error('Phone is not entered');
          }
        }
        else {
          this.data.error('Password is not entered');
        }
      }
      else {
        this.data.error('Email is not entered');
      }
    }
    else {
      this.data.error('Username is not entered');
    }
  }

async updateUser() {
    

    try {
      if (this.validate(this.currentSettings)) {
        const data = await this.rest.put(
          '/api/auth/updateUser/'+this.id,
          {
          username: this.currentSettings['username'],
          email: this.currentSettings['email'],
          password: this.currentSettings['password'],
          phone: this.currentSettings['phone']
        });
      }
    } catch (error) {
      this.data.error(error['message']);
    }

}

  async updateAdmin() {
    
    try {
      if (this.validate(this.currentSettings)) {
        const data = await this.rest.put(
          '/api/auth/updateAdmin/'+this.id,
          {
          username: this.currentSettings['username'],
          email: this.currentSettings['email'],
          password: this.currentSettings['password'],
          phone: this.currentSettings['phone']
        });
      }
    } catch (error) {
      this.data.error(error['message']);
    }
   
  }





}
