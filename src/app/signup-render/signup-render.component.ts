import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";



@Component({
  selector: 'app-signup-render',
  templateUrl: './signup-render.component.html',
  styleUrls: ['./signup-render.component.css']
})
export class SignupRenderComponent implements OnInit {

   constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }


    MenuPage(){
      this.router.navigateByUrl('');
  }

  LoginPage(){
      this.router.navigateByUrl('login-page');
  }


}
