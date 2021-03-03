import { Component, OnInit } from '@angular/core';
import { User } from "src/app/models/User";
import { Role } from "src/app/models/Role";
import { FormBuilder, FormGroup, Validators  } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { NgxSpinnerService } from 'ngx-spinner';
import { NgModule } from '@angular/core';

import { RestApiService } from '../rest-api.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username = '';
  email = '';
  password = '';
  phone = '';
  submitted = false;
  btnDisabled = false;
  registerForm: FormGroup;
    public messageModal: string;
   public displayMessageModal: boolean = false;
 constructor(private router: Router, private data: DataService, private rest: RestApiService , private spinner: NgxSpinnerService,private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            phone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
            
        });
  }

// convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }



  async register() {
   
    try {
        
        const data = await this.rest.post(
          'http://localhost:8080/api/auth/signupUser',
          {
          username: this.registerForm.value.username,
          email: this.registerForm.value.email,
          password: this.registerForm.value.password,
          phone: this.registerForm.value.phone
          }
        );

         alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
       
         this.router.navigateByUrl('signupRender-page'); //after successful registration user will be redirected to home page
      
    } catch (error) {
      this.data.error(error['message']);
    }
    this.btnDisabled = false;
  }

  
  MenuPage(){
      this.router.navigateByUrl('');
  }


    /**
   * Construit le message à afficher suite à une action utilisateur.
   * @param msg 
   */
  buildMessageModal(msg: string){
      this.messageModal = msg;
      this.displayMessageModal = true;
  }


 

}
