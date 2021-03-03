import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CompanyComponent } from './company/company.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu/menu.component';
import { AccountComponent } from './account/account.component';
import { AddParkingComponent } from './add-parking/add-parking.component';
import { SignupRenderComponent } from './signup-render/signup-render.component';
import { ListParkingsComponent } from './list-parkings/list-parkings.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AppComponent } from "src/app/app.component";
import { RestApiService } from './rest-api.service';
import { DataService } from './data.service';
import { AuthGuardService } from './auth-guard.service';
import { SuccesReservationComponent } from './succes-reservation/succes-reservation.component';
import { FullParkingComponent } from './full-parking/full-parking.component';
import { RedirectionReclamationComponent } from "./redirection-reclamation/redirection-reclamation.component";
import { ListeReclamationComponent } from "./liste-reclamation/liste-reclamation.component";

const routes: Routes = [  
                    {path: '', component: MenuComponent},
                    {path: 'menu-page/:user', component: MenuComponent },
                    {path: 'user-page', component: UserComponent},
                    {path: 'company-page', component: CompanyComponent},
                    {path: 'login-page', component: LoginComponent},
                    {path: 'account-page', component: AccountComponent},
                    {path: 'addParking-page', component: AddParkingComponent},
                    {path: 'signupRender-page', component: SignupRenderComponent},
                    {path: 'listParkings-page', component: ListParkingsComponent},
                    {path: 'reservation-page/:area', component: ReservationComponent},
                    {path: 'succes-reservation', component: SuccesReservationComponent},
                    {path: 'full-parking/:area', component: FullParkingComponent},
                    {path: 'redirection-reclamation', component: RedirectionReclamationComponent},
                    {path: 'listeReclamtions-page', component: ListeReclamationComponent},

                    
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  providers: [RestApiService, DataService, AuthGuardService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
