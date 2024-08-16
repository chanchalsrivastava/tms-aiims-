import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private baseUrl = "http://192.168.24.131:8085/admin";
  dismissAll: any;
  constructor(private http: HttpClient) { }
  getOTP(formData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.baseUrl}/check-grievance-status`, formData, { headers, observe: 'response' });
  }
  
  statusData(formData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.baseUrl}/verify-grievance-status`, formData, { headers, observe: 'response' });
  }
}
