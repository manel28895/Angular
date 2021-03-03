import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MenuComponent } from './menu/menu/menu.component';
import { MessageModalComponent } from './modal/message-modal/message-modal.component';
import { CompanyComponent } from './company/company.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import {CommonModule} from '@angular/common';
import { AddParkingComponent } from './add-parking/add-parking.component';
import {MatSelectModule} from '@angular/material/select';
import { SignupRenderComponent } from './signup-render/signup-render.component';
import { ListParkingsComponent } from './list-parkings/list-parkings.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SuccesReservationComponent } from './succes-reservation/succes-reservation.component';
import { AlertsModule } from 'angular-alert-module';
import { FullParkingComponent } from './full-parking/full-parking.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { RedirectionReclamationComponent } from './redirection-reclamation/redirection-reclamation.component';
import { ListeReclamationComponent } from './liste-reclamation/liste-reclamation.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MenuComponent,
    MessageModalComponent,
    CompanyComponent,
    LoginComponent,
    AccountComponent,
    AddParkingComponent,
    SignupRenderComponent,
    ListParkingsComponent,
    ReservationComponent,
    SuccesReservationComponent,
    FullParkingComponent,
    RedirectionReclamationComponent,
    ListeReclamationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   /* for using form elements like NgForm */
    HttpClientModule, /* for using http request elements end verbs like GET, POST, ... */
    BrowserAnimationsModule, ReactiveFormsModule, /* for using input date picker -> need to install @angular/material package*/
    NgxSpinnerModule, /* for using spinner */
    CommonModule,
    MatSelectModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    DlDateTimeDateModule,  // <--- Determines the data type of the model
    DlDateTimePickerModule,
    AngularDateTimePickerModule,
    AlertsModule.forRoot(),
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
