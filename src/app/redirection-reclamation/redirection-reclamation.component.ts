import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-redirection-reclamation',
  templateUrl: './redirection-reclamation.component.html',
  styleUrls: ['./redirection-reclamation.component.css']
})
export class RedirectionReclamationComponent implements OnInit {

constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
  }
  MenuPage(){
      this.router.navigateByUrl('');
  }
}
