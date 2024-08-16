import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private apiUrl = 'http://192.168.24.131:8085/admin/get-department-list';
  private apiUrl1 = 'http://192.168.24.131:8085/admin/addGrievance';
  private apiUrl2 = 'http://192.168.24.131:8085/api/v1/auth/register';
  private apiUrlemp='http://192.168.24.131:8085/admin/get-employeeDetail';
  private apiUrl5 = 'http://192.168.24.131:8085/admin/add-department';
  private apiUrl6='http://192.168.24.131:8085/admin/add-category';
  
  constructor(private http: HttpClient,private router: Router) { }
  getDepartments(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getCategoriesByDepartment(departmentId: any): Observable<any[]> {
    console.log("departmentId : " + departmentId);
    const apiUrl1 = `http://192.168.24.131:8085/admin/get-department-list/${departmentId}`;

    return this.http.get<any[]>(apiUrl1);
  }
  addUser(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrl2, payload);
  }
  sendOTP(employeeId: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrlemp, employeeId, { headers });
  }
  addGrievance(grievanceData: any):Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl1, grievanceData, { headers });
  }
  addEmployee(employee : any): Observable<any> {
    return this.http.post(this.apiUrl5,employee);
  }
  getCategories() {
    return this.http.get(this.apiUrl6);
  }
}
