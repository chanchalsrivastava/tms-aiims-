import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://192.168.24.131:8085/api/v1';
  private getUserRoleUrl = "http://192.168.24.131:8085/admin/get-userRole";
  private token = "";
  LogoutButton = new BehaviorSubject<boolean>(false)
  LogInButton = (localStorage.getItem('token')) ? false : true;
  constructor(private http: HttpClient) {}

  login(formData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.baseUrl}/auth/login`, formData, { headers, observe: 'response' });
  }

  getUserRoles(): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `Bearer ${this.token}`});
    return this.http.get<any>(`${this.getUserRoleUrl}`, { headers });
  }
  setToken(token: string): void {
    this.token = token;
  }

  
}
