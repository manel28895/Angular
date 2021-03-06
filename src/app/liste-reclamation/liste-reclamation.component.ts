import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-reclamation',
  templateUrl: './liste-reclamation.component.html',
  styleUrls: ['./liste-reclamation.component.css']
})
export class ListeReclamationComponent implements OnInit {

 reclamations: [];

  id:string;
  
  
  public messageModal: string;

  public displayMessageModal: boolean = false;

  constructor(private router: Router,private data: DataService, private rest: RestApiService) { }

  async ngOnInit() {
    try {
      this.data.getProfile();
      this.id=this.data.user.id;
      const data1 = await this.rest.get('http://localhost:8080/api/reclamation/getReclam/'+this.id);
      const data2=JSON.stringify(data1);

      if (
       data2 === '[]' 
      ) {
        this.data.warning(
          'You dont have any reclamations!');
      }else {
        
         const data3=JSON.parse(data2);
         this.reclamations=data3;
         this.buildMessageModal(''+ data2)
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

    MenuPage(){
      this.router.navigateByUrl('');
  }

}
