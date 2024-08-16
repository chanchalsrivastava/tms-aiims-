import { Component } from '@angular/core';
import { UserapiService } from 'src/app/userapi.service';
import { GrievanceModule } from './grievance.module';
import { FormGroup,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-grievance',
  templateUrl: './grievance.component.html',
  styleUrls: ['./grievance.component.css']
})
export class GrievanceComponent {
  grievances: GrievanceModule[] = [];
  grievancesNew: any;
  grievancesActive: any;
  map: any;
  allActiveData: any;
  empDetail!: FormGroup;

  constructor(private user: UserapiService,private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.empDetail = this.formBuilder.group({
      RefNo: [''],
      department: [''],
      category: [''],
      concern: [''],
      status: [''],
      registeredOn: ['']
    });
    this.fetchUserGrievances();
  }
  fetchUserGrievances() {
    this.user.getUserGrievances()
      .subscribe(
        (data: any) => {
          console.log(data);
          console.log(data.Active);
          this.allActiveData = data.ACTIVE;

          if (Array.isArray(data)) {
            this.grievancesActive = data
              .filter((item: any) => item.status === 'active' || item.refNo === 0)
              .map((item: any) => this.mapToGrievanceModule(item));

            this.grievances = data.map((item: any) => this.mapToGrievanceModule(item));
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

  mapToGrievanceModule(item: any): GrievanceModule {
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
    const grievance = new GrievanceModule();
    grievance.refNo = item.refNo;
    grievance.department = item.department;
    grievance.categories = item.categories;
    grievance.concern = item.concern;
    grievance.status = item.status;
    grievance.registeredOn = item.registeredOn;
    return grievance;
  }

  editEmployee(grievance: any) {
    this.empDetail.controls['RefNo'].setValue(grievance.RefNo);
    this.empDetail.controls['department.name'].setValue(grievance.department.name);
    this.empDetail.controls['category.name'].setValue(grievance.category.name);
    this.empDetail.controls['concern'].setValue(grievance.concern);
    this.empDetail.controls['status'].setValue(grievance.status);
    this.empDetail.controls['registeredOn'].setValue(grievance.registeredOn);

  }
  updateEmployee() {
   

    {
      this.allActiveData.push(this.empDetail.value)

      console.log(this.empDetail.value);
    }
}
}
