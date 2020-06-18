import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  empForm: FormGroup;
  emp:any = new Object;
  submitted = false;

  constructor(private fb: FormBuilder,
              private employeeService: EmployeeService,
              private router: Router,){
                this.empForm = this.fb.group({
                  firstName: ['', [Validators.required,Validators.pattern("[a-zA-Z ]*")]],
                  lastName: ['', [Validators.required,Validators.pattern("[a-zA-Z ]*")]],
                  gender: ['', [Validators.required]],
                  address: ['', [Validators.required]],
                  email: ['', [Validators.required, Validators.email]],
                  phonenumber: ['', [Validators.required, Validators.pattern("(03|07|08|09|01[2|6|8|9])+([0-9]{8})")]],
                  birthday: ['', [Validators.required]],
                  startday: ['', [Validators.required]]
                });

               }

  ngOnInit(): void {
  }

  save(){
    //test DatePive to covert
    // var dateformat = new DatePipe('en-US');
    // this.emp.dateCreate = dateformat.transform(this.emp.dateCreate, 'dd/MM/yyyy');
    if(this.empForm.value != null && this.empForm.value != ""){
      this.emp.empFirstName = this.empForm.value.empFirstName;
      this.emp.empLastName = this.empForm.value.empLastName;
      this.emp.empGender = this.empForm.value.empGender;
      this.emp.empAddress = this.empForm.value.empAddress;
      this.emp.empEmail = this.empForm.value.empEmail;
      this.emp.empPhoneNumber = this.empForm.value.empPhoneNumber;
      this.emp.empBirthDay = this.empForm.value.empBirthDay;
      this.emp.empStartDay = this.empForm.value.empStartDay;
    this.employeeService.createEmp(this.emp).subscribe( 
      data => {
        console.log(data);
        alert("Create Successful!")
      });
    this.gotoList();
    } else{
      alert("create Failed!");
    }
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/employee/list'])
  }
}
