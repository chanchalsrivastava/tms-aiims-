
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeModule } from '../../home/home.module';
import { ServicesService } from '../../services.service';
import { Pipe, PipeTransform } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})

export class TicketComponent {
  empDetail !: FormGroup;
  empCode !: FormGroup;
  formData: HomeModule = new HomeModule();
  selectedCategory: any;
  selectedDepartment: any;
  departments: any;
  category: any;
  image1Base64!: string;
  image2Base64!: string;
  categories: any;
  image1: any;
  image2: any;
  header: any;
  isFormEnabled: boolean = false;
  otpSent: boolean = false;
  isOtpSubmitted: boolean = false;
  phoneNumber: string = '';
  grievanceRef: any;
  showSuccessModal = false;
  employeeData: boolean = false;
  statusService: any;
  refNo: any;
  popupVisible: boolean = false;

  constructor(private formBuilder: FormBuilder, private service: ServicesService, private router: Router) {
  }
  ngOnInit(): void {
    console.log("TICKET COMP");
    this.empDetail = this.formBuilder.group({
      departmentId: ["", Validators.required],
      categoryId: ["", Validators.required],
      image1: [""],
      image2: [""],
      concern: ["", Validators.required],
      OTP: ['', Validators.required],
    });
    this.empCode = this.formBuilder.group({
      employeeId: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]\d{7}$/)]]
    });
    this.getDepartments();
    this.getCategoriesByDepartment(this.category);
  }
  employeeAllDetails = {
    contactNo: "",
    email: "",
    employeeId: "",
    fullName: "",
    otp: null,
    status: ""
  }

  onSubmit() {
    console.log(this.empDetail);
    const empDetail = this.empDetail.value;
    const grievanceData = {
      contactNo: this.employeeAllDetails.contactNo,
      employeeId: this.employeeAllDetails.employeeId,
      email: this.employeeAllDetails.email,
      departmentId: empDetail.departmentId,
      categoryId: empDetail.categoryId,
      fullName: this.employeeAllDetails.fullName,
      concern: empDetail.concern,
      image1: this.image1Base64,
      image2: this.image2Base64,
      otp: empDetail.OTP,
    };
    console.log(grievanceData);
    this.service.addGrievance(grievanceData).subscribe(
      response => {
        console.log('Grievance submitted successfully:', response);
        // this.grievanceRef = response.refNo;
        // this.grievanceRef = this.refNo;
        console.log(response.refNo);
        this.refNo = response.refNo;
        // console.log(this.grievanceRef);

        document.getElementById("exampleModal")?.classList.add("show");
        document.getElementById("exampleModal")?.setAttribute('aria-hidden', 'false');
      },
    );
    this.showSuccessModal = true;
  }
  
  ok() {
    console.log(this.showSuccessModal)
    this.showSuccessModal = false;
    this.employeeData = false;
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

  handleFileInput(event: any, imageNumber: string) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (imageNumber === 'image1') {
          this.image1Base64 = reader.result as string;
        } else if (imageNumber === 'image2') {
          this.image2Base64 = reader.result as string;
        }
      };
    }
  }
  searchEmployee() {
    this.isFormEnabled = true;
  }
  submitOTP() {

    this.isOtpSubmitted = true;
    this.empDetail.get('OTP')?.disable();
  }
  transform(phoneNumber: string): string {
    const visibleDigits = phoneNumber.slice(-4);
    const maskedDigits = '*'.repeat(phoneNumber.length - 4);
    return maskedDigits + visibleDigits;
  }

  sendOTP() {
    const empCode = {
      "employeeId": this.empCode.value.employeeId
    }
    console.log(empCode.employeeId);
    this.service.sendOTP(empCode).subscribe(
      (response) => {
        console.log(response);
        this.employeeAllDetails = {
          contactNo: response.contactNo,
          email: response.email,
          employeeId: response.employeeId,
          fullName: response.fullName,
          otp: response.otp,
          status: response.status
        }
        console.log("ALL DATA", this.employeeAllDetails);
        this.otpSent = true;
        if (response.otp) {
          this.employeeData = true;
        }
      }
    );
  }

  sendOTPZZ(): void {
    const empCode = {
      "employeeId": this.empCode.value.employeeId
    }
    this.service.sendOTP(empCode).subscribe(
      response => {
        console.log(response);
        this.otpSent = true;
      },
    );
  }


}


