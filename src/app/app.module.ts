import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
// import { LoginComponent } from './login/login.component';
// import { StatusComponent } from './status/status.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { GrievanceComponent } from './component/grievance/grievance.component';
import { ClosedComponent } from './component/closed/closed.component';
import { AdminComponent } from './admin/admin.component';
import { AssigndataComponent } from './admin/assigndata/assigndata.component';
import { AddusersComponent } from './admin/addusers/addusers.component';
import { NewComponent } from './helpdesk/new/new.component';
import { ActivesComponent } from './helpdesk/actives/actives.component';
import { ClosedsComponent } from './helpdesk/closeds/closeds.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
// import { TicketComponent } from './ticket/ticket.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { SearchPipe } from './search.pipe';
import { TicketComponent } from './landing/ticket/ticket.component';
import { LoginComponent } from './landing/login/login.component';
import { StatusComponent } from './landing/status/status.component';
import { StaffnewComponent } from './staffhome/staffnew/staffnew.component';
import { StaffactiveComponent } from './staffhome/staffactive/staffactive.component';
import { StaffclosedComponent } from './staffhome/staffclosed/staffclosed.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    StatusComponent,
    GrievanceComponent,
    ClosedComponent,
    AdminComponent,
    
     AssigndataComponent,
     AddusersComponent,
     NewComponent,
     ActivesComponent,
     ClosedsComponent,
     DashboardComponent,
     AboutComponent,
     TicketComponent,
     UserHomeComponent,
     SearchPipe,
     StaffnewComponent,
     StaffactiveComponent,
     StaffclosedComponent,
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    CommonModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
