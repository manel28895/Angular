import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NgModule } from '@angular/core';
import { UserService } from "src/app/services/user.service";
import { DataService } from '../../data.service';
import { RestApiService } from '../../rest-api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  title = 'Parking ticket system';
   public getUsername: string;
    public getUser: string;
   public messageModal: string;
   public displayMessageModal: boolean = false;
   public messageC: boolean = false;
   public messageNC: boolean = false;
   public reponse: string ;
   public area: '';
   public user_login: '';
   public user_email: '';
   public subject: '';
   public description: '';
   public parking: '';
   reservation:any;
   reserv:any;
   reservations: [];
   parkings: [];
  constructor(private router: Router, private activatedRoute: ActivatedRoute,private userService: UserService,private data: DataService,private rest: RestApiService) { 
     
  }
  async ngOnInit() {

     if (this.data.user==null) {
       
        //this.buildMessageModal("non co");

        this.messageNC=true;
        
      }else
    {  this.data.getProfile();
     
       this.getUser=this.data.user;
     

       //this.buildMessageModal(this.data.user.username);

        this.messageC= true;
    };
      this.deleteReservations();
      this.getListeParkings();
  }
async getListeParkings()
{
      try {
     
      const data1 = await this.rest.get('http://localhost:8080/api/parking/getAllParkings');
      const data2=JSON.stringify(data1);

      if (
       data2 === '[]' 
      ) {
        this.data.warning(
          'There are no parkings!');
      }else {
        
         const data3=JSON.parse(data2);
         this.parkings=data3;
         this.buildMessageModal(''+ data2)
      }

     

    } catch (error) {
      this.data.error(error['message']);
    }
}

 async add() {
    try {
        const data = await this.rest.post(
          'http://localhost:8080/api/reclamation/addReclamation',
          {
             login_user: this.user_login,
             email_user: this.user_email,
             description: this.description,
             parkingId: this.parking,
             subject: this.subject
             
          }
        );
        this.router.navigateByUrl('redirection-reclamation');
    } catch (error) {
      this.data.error(error['message']);
    }
   
  }

  MenuPage(){
      this.router.navigateByUrl('');
  }



 async deleteReservations()
  {    const message=await this.rest.delete(
          'http://localhost:8080/api/reservation/delete'
        );
        

        //this.buildMessageModal(''+message);
      }
  
  
  SignupPage(){
      this.router.navigateByUrl('user-page');
  }

  SignupPageCompany(){
      this.router.navigateByUrl('company-page');
  }

  
  LoginPage(){
      this.router.navigateByUrl('login-page');
  }

    
  AccountPage(){
      
      this.router.navigateByUrl('account-page');
      }

 
  logoutPage()
  {
    this.data.user = {};
    this.messageC=false;
    this.messageNC=true;
    localStorage.clear();
    this.router.navigate(['']);
                 
  }



    /**
   * Construit le message à afficher suite à une action utilisateur.
   * @param msg 
   */
  buildMessageModal(msg: string){
      this.messageModal = msg;
      this.displayMessageModal = true;
  }



    
  ReservationPage(){
      
      this.router.navigate(['reservation-page',this.area]);
      }




}
