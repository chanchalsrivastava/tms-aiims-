import { Component, OnInit } from '@angular/core';
import { UserapiService } from 'src/app/userapi.service';
import { UserModule } from 'src/app/user/user-home/user-home.module';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit{
  grievances: UserModule[] = [];
  grievancesNew: any;
  grievancesActive: any
map:any;
allNewData:any=[];
  constructor(private user: UserapiService) { }

  ngOnInit(): void {
    this.fetchUserGrievances();
  }
  fetchUserGrievances() {
    this.user.getUserGrievances()
      .subscribe(
        (data: any) => {
          console.log(data);
          console.log(data.NEW);
          this.allNewData = data.NEW;
          
          if (Array.isArray(data)) {
            this.grievancesNew = data
              .filter((item: any) => item.status === 'new'|| item.refNo === 0)
              .map((item: any) => this.mapToUserModule(item));
  
            this.grievancesActive = data
              .filter((item: any) => item.status === 'active')
              .map((item: any) => this.mapToUserModule(item));
  
            this.grievances = data.map((item: any) => this.mapToUserModule(item));
          } else {
            console.error('Error: Unexpected data format. Expected an array.');
          }
          const token = data.token;
          console.log(token);
          if (token) {
            this.user.setToken(token);
          }
        },
        error => {
          console.error('Error fetching grievances:', error);
        }
      );
  }
  
  mapToUserModule(item: any): UserModule {
    const map: Map<string, Array<object>> = new Map<string, Array<object>>();
    map.set('new', [{ id: 1, name: 'Object1' }, { id: 2, name: 'Object2' }]);
    for (const [status, objects] of map) {
      const table = document.createElement('table');
      const caption = document.createElement('caption');
      caption.textContent = `Status: ${status}`;
      table.appendChild(caption);
      objects.forEach((obj: any) => {
          const row = table.insertRow();
          const cell1 = row.insertCell();
          const cell2 = row.insertCell();
          cell1.textContent = obj.id.toString();
          cell2.textContent = obj.name;
      });
      document.body.appendChild(table);
  }
    const grievance = new UserModule();
    grievance.refNo = item.refNo;
    grievance.department = item.department;
    grievance.categories = item.categories;
    grievance.concern = item.concern;
    grievance.status = item.status;
    grievance.registeredOn = item.registeredOn;
    return grievance;
  }

}
