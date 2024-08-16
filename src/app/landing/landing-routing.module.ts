import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { TicketComponent } from './ticket/ticket.component';
// import { LoginComponent } from './login/login.component';
// import { StatusComponent } from './status/status.component';

const routes: Routes = [
  
  { path: '', redirectTo: '', pathMatch: 'full' },
  // { path: '', component: TicketComponent},
  // { path: 'login', component: LoginComponent},
  // { path: 'status', component: StatusComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
