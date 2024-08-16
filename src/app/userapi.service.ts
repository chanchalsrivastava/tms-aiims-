

import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserapiService implements OnInit{
  private apiUrl1 = 'http://192.168.24.131:8085/admin/GrievenceByEmpId';
  private token:any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.token = localStorage.getItem('token')
  }

  getUserGrievances(): Observable<any[]> {
    console.log("this.token :::::::",this.token, "WORKING");    
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `Bearer ${this.token}`});
    return this.http.get<any[]>(`${this.apiUrl1}`, { headers });
  }

  setToken(token: string): void {
    this.token = token;    
  }
}





