import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';
import { AssignModule } from './assigndata.module';
@Component({
  selector: 'app-assigndata',
  templateUrl: './assigndata.component.html',
  styleUrls: ['./assigndata.component.css']
})
export class AssigndataComponent implements OnInit {
  selectedCategory: any;
  empDetail !: FormGroup;
  selectedDepartment: any;
  
  departments:any;
  category: any[]=[];
  employees: any[] = [];
  categories: any;
  formData: AssignModule = new AssignModule();
  constructor(private formBuilder: FormBuilder, private service: ServicesService) { }
  ngOnInit(): void {
    this.empDetail = this.formBuilder.group({
      departmentId: ['', Validators.required],
      departmentName: ['', Validators.required],
      categoryId: ['', Validators.required],
      categoryName: ['', Validators.required],
      selectedCategory: ['', Validators.required],
      
    });
    this.getDepartments();
    this.getCategoriesByDepartment(this.category);
    this.service.getCategories().subscribe(categories => {
      this.categories = categories;
    });
 
  }

  onSubmit() {
    console.log(this.empDetail);
    const empDetail = this.empDetail.value;
    const grievanceData = {
      departmentId: empDetail.departmentId,
      categoryId: empDetail.categoryId,
    };

    this.service.addGrievance(grievanceData).subscribe(
      response => {
        console.log('Grievance submitted successfully:', response);
      },
      error => {
        console.error('Error submitting grievance:', error);
      }
    );
  }

  getDepartments() {
    this.service.getDepartments().subscribe(data => {
      this.departments = data;
    });
  }
  getCategoriesByDepartment(departmentId: any) {
    for (var i = 0; i < this.departments.length; i++) {
      if (departmentId == this.departments[i].id) {
        this.categories = this.departments[i].categories;
      }
    }
  }

  departmentSelected(event: any) {
    this.getCategoriesByDepartment(event.target.value);
  }
  data: any = [];
 
  addCategory()
  {
    console.log(this.empDetail);
    this.formData.categoryId = this.empDetail.value.categoryId;
    this.formData.categoryName = this.empDetail.value.categoryName;
    {
      this.data.push(this.empDetail.value)

      console.log(this.empDetail.value);
    }
  }

  saveDepartment() {
    const departmentName = this.empDetail.get('departmentName')?.value;
    if (departmentName) {
      const newDepartment = { id: this.departments.length + 1, name: departmentName };
      this.departments.push(newDepartment);
      this.empDetail.patchValue({ selectedDepartment: newDepartment.id });
    }
  }


  
  save() {
  }

}
