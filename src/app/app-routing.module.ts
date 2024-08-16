import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
// import { LoginComponent } from './login/login.component';
// import { StatusComponent } from './status/status.component';
import { GrievanceComponent } from './component/grievance/grievance.component';
import { ClosedComponent } from './component/closed/closed.component';

import { AdminComponent } from './admin/admin.component';
import { AssigndataComponent } from './admin/assigndata/assigndata.component';
import { AddusersComponent } from './admin/addusers/addusers.component';
import { NewComponent } from './helpdesk/new/new.component';
import { ActivesComponent } from './helpdesk/actives/actives.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
// import { TicketComponent } from './ticket/ticket.component';
import { authGuard } from './auth.guard';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { TicketComponent } from './landing/ticket/ticket.component';
import { LoginComponent } from './landing/login/login.component';
import { StatusComponent } from './landing/status/status.component';
import { StaffnewComponent } from './staffhome/staffnew/staffnew.component';
import { StaffactiveComponent } from './staffhome/staffactive/staffactive.component';
import { StaffclosedComponent } from './staffhome/staffclosed/staffclosed.component';


const routes: Routes = [
  { path: '', redirectTo: 'ticket', pathMatch: 'full' },
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'ticket', component: TicketComponent },
      { path: 'login', component: LoginComponent },
      { path: 'status', component: StatusComponent }
    ]
  },
  { path: 'active', component: GrievanceComponent },
  { path: 'closed', component: ClosedComponent },
  { path: 'adduser', component: AddusersComponent },
  { path: 'user', component: UserHomeComponent, canActivate:[authGuard] },
  { path: 'staffnew', component: StaffnewComponent },
  { path: 'staffactive', component: StaffactiveComponent },
  { path: 'staffclosed', component: StaffclosedComponent },

  // {
  //   path: 'user',
  //   loadChildren: () => import('./user/user.module').then(m => m.UserModule) , canActivate:[authGuard]
  // },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate:[authGuard]
  },


  // { path: 'admin', component: AdminComponent },
  { path: 'new', component: NewComponent },
  { path: 'actives', component: ActivesComponent },
  { path: 'closeds', component: ClosedComponent },
  { path: 'assign', component: AssigndataComponent },
  { path: 'dash', component: DashboardComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
