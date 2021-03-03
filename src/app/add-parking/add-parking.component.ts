import { Component, OnInit , AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-parking',
  templateUrl: './add-parking.component.html',
  styleUrls: ['./add-parking.component.css']
})
export class AddParkingComponent  implements OnInit {

  type = '';
  location = '';
  nbrPlaces = '';
  phone = '';
  price = '';
  id_user='';
  area='';

  btnDisabled = false;
/*
  //Map
   @ViewChild('mapContainer') gmap: ElementRef;
    map: google.maps.Map;
    lat = 40.73061;
    lng = -73.935242;

    coordinates = new google.maps.LatLng(this.lat, this.lng);

    mapOptions: google.maps.MapOptions = {
     center: this.coordinates,
     zoom: 8
    };

    marker = new google.maps.Marker({
      position: this.coordinates,
      map: this.map,
    });

    ngAfterViewInit() {
      this.mapInitializer();
    }

    mapInitializer() {
      this.map = new google.maps.Map(this.gmap.nativeElement, 
      this.mapOptions);
      this.marker.setMap(this.map);
    }
   */

    
 constructor(private router: Router, private data: DataService, private rest: RestApiService) {

  }
   

  ngOnInit() {
    this.data.getProfile();
    this.id_user=this.data.user.id;
  }

  validate() {
    if (this.type) {
      if (this.location) {
        if (this.nbrPlaces) {
          if (this.phone) {
             if (this.area) {
            if (this.price) {
            return true;
          }
          else {
            this.data.error('Price is not entered');
          }
        }
           else {
            this.data.error('area is not entered');
          }
        }
        else {
          this.data.error('phone  is not entered');
        }
      }
      else {
        this.data.error('Number of places is not entered');
      }
    }
    else {
      this.data.error('Location is not entered');
    }
     }
    else {
      this.data.error('Type is not entered');
    }
  }


  async add() {
    this.btnDisabled = true;
    try {
      if (this.validate()) {
        const data = await this.rest.post(
          'http://localhost:8080/api/parking/addParking',
          {
             location: this.location,
             phone: this.phone,
             type: this.type,
             nbr_places: this.nbrPlaces,
             price: this.price,
             area:this.area,
             userId: this.id_user
             
          }
        );
         this.router.navigateByUrl('listParkings-page');
      }
    } catch (error) {
      this.data.error(error['message']);
    }
    this.btnDisabled = false;
  }

  accountPage()
  {
    this.router.navigateByUrl('account-page');

  }

  MenuPage(){
      this.router.navigateByUrl('');
  }


}
