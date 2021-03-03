import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-full-parking',
  templateUrl: './full-parking.component.html',
  styleUrls: ['./full-parking.component.css']
})
export class FullParkingComponent implements OnInit {

    constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  public area: string;

  ngOnInit() {
    this.area = this.activatedRoute.snapshot.paramMap.get('area');
  }

 

  ReservationPage(){
      this.router.navigate(['reservation-page',this.area]);
  }
}
