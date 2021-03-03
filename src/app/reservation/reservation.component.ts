import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from "@angular/router";
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],

})
export class ReservationComponent implements OnInit {


  type_voiture = 'camionette';
  

public area: string;
parkings: [];
public messageC: boolean = false;
public messageNC: boolean = false;
public alert: boolean = false;
public getUser: string;
public id: string;
public messageModal: string;
public displayMessageModal: boolean = false;


arrival : String;
departure : String;
 arriv=new Date();
 dep=new Date();
	settings = {
		bigBanner: true,
		timePicker: true,
		format: 'yyyy-MM-ddTHH:mm:ss.SSS',
		defaultOpen: false,
    closeOnSelect:false
	}

constructor(private router: Router, private activatedRoute: ActivatedRoute,private data: DataService,private rest: RestApiService,private alerts: AlertsService) { 
     
  }
  async ngOnInit() {
 
    this.area = this.activatedRoute.snapshot.paramMap.get('area');
    
    //this.buildMessageModal(this.area);
       if (this.data.user==null) {
       
        //this.buildMessageModal("non co");

        this.messageNC=true;
        
      }else
    {  this.data.getProfile();
     
       this.getUser=this.data.user;
       this.id=this.data.user.id;
     
      
       //this.buildMessageModal(this.data.user.username);

        this.messageC= true;
    }


    
     

    try {
      
      const data1 = await this.rest.get('http://localhost:8080/api/parking/getParkingsByArea/?area='+this.area);
      const data2=JSON.stringify(data1);

      if (
       data2 === '[]' 
      ) {
        this.data.warning(
          'You have not entered any parkings!');
      }else {
        
         const data3=JSON.parse(data2);
         this.parkings=data3;
         
        
      }

     

    } catch (error) {
      this.data.error(error['message']);
    }

  



 

  }


    /**
   * Construit le message à afficher suite à une action utilisateur.
   * @param msg 
   */
  buildMessageModal(msg: string){
      this.messageModal = msg;
      this.displayMessageModal = true;
  }


  
  async CreateReservation( parking) {

    
    try {
     
        const data = await this.rest.post(
          'http://localhost:8080/api/reservation/addReservation',
          {
             type_voiture: this.type_voiture,
             arrival_date: this.arriv,
             departure_date: this.dep,
             userId: this.id,
             parkingId: parking,
             
          }
        );
        
        
        if (data['success']) {
          this.router.navigate(['succes-reservation']);
        }else 
        {

           this.router.navigate(['full-parking',this.area]);
        }
        
      
      
    } catch (error) {
      this.data.error(error['message']);
    }
    
  }

    MenuPage(){
      this.router.navigateByUrl('');
  }


}
