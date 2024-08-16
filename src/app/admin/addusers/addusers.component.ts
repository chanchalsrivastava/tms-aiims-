import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent {
    
  constructor(private service: ServicesService) { }
  submitForm() {

    const payload = {
        employeeCode: 'value from form',
        employeeId: 'value from form',
        employeeName: 'value from form',
        contactNo: 'value from form'
    };


    this.service.addUser(payload).subscribe(
        response => {
            console.log(response);
            alert('User added successfully!');
           
        },
        error => {
            console.error('Error occurred while adding user:', error);
            alert('Failed to add user. Please try again later.');
       
        }
    );
}
}
