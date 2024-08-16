
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusService } from '../../status.service';
import { StatusModule } from './status.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  statusForm!: FormGroup;
  otpSent: boolean = false;
  isOtpSubmitted: boolean = false;
  getOtp: any;
  allData = {};
  getStatus: any;
  formData: StatusModule = new StatusModule();
  StatusModule: any;
  modelStatus = false;
  otpInput = false;
  constructor(private formBuilder: FormBuilder, private statusService: StatusService,private router: Router) { }

  ngOnInit(): void {
    this.statusForm = this.formBuilder.group({
      employeeId: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]\d{7}$/)]],
      grievanceRef: ['', Validators.required],
      OTP: ['', Validators.required],
    });
  }

  GetOTP(): void {
    const formData = {
      "employeeId": this.statusForm.value.employeeId,
      "grievanceRef": this.statusForm.value.grievanceRef
    };
    console.log(formData);
    this.allData = { ...formData }

    this.statusService.getOTP(formData).subscribe(
      response => {
        console.log(response);
        this.getOtp = response.body.otp;
        console.log(this.getOtp);
        this.otpSent = true;
        if (this.getOtp) {
          this.statusForm.get('employeeId')?.disable();
          this.statusForm.get('grievanceRef')?.disable();
          this.otpInput = true;
        }
      },
    );
  }
ok(){
  this.modelStatus = false;
  this.otpInput = false;
}
  dataSubmit() {
    this.allData = { ...this.allData,"otp": this.getOtp }
    console.log(this.allData);
    this.statusService.statusData(this.allData).subscribe(
      response => {
        console.log(response);
        this.getStatus = response.body.status;
        console.log(this.getStatus);
        if (this.getStatus) {
          this.modelStatus = true;
        }
      }
    )
  }


}

