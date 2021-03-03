import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-succes-reservation',
  templateUrl: './succes-reservation.component.html',
  styleUrls: ['./succes-reservation.component.css']
})
export class SuccesReservationComponent implements OnInit {

    constructor(private router: Router, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
  }

  MenuPage(){
      this.router.navigateByUrl('');
  }
}
