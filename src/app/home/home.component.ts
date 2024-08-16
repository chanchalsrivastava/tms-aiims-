import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;
  constructor(private router: Router,private route: ActivatedRoute) { }
  onLogin(): void {
    this.isLoggedIn = true;
  }

  goToTicketPage(): void {
    this.router.navigate(['/ticket']); // Navigate to the 'ticket' route
  }

  goToLoginPage(): void {
    this.router.navigate(['/login']); // Navigate to the 'login' route
  }

  goToStatusPage(): void {
    this.router.navigate(['/status']); // Navigate to the 'status' route
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Access params here
    });
  }

}






