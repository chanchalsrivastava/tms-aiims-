import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  // LogoutButton = (localStorage.getItem('token')) ? true : false;
  LogInButton = (localStorage.getItem('token')) ? false : true;

  constructor(private service:ServicesService, private route: Router) { }
  ngOnInit() {
    const copy: HTMLElement = document.querySelector(".logos-slide")!.cloneNode(true) as HTMLElement;
    document.querySelector(".logos")!.appendChild(copy);

  }
  
  onLogout(): void {
    this.isLoggedIn = false;
  }

}
