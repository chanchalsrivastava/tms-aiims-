import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  declarations: [
    // TicketComponent,
    // LoginComponent,
    // StatusComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LandingModule { }
