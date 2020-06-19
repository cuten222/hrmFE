import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  empForm: FormGroup;
  empID: number;
  emp: any;
  dept: any = [];
  dateformat = new DatePipe('en-US');

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private employeeService: EmployeeService,) { 

    this.empForm = this.fb.group({
      firstName: new FormControl(),
      lastName: new FormControl(),
      gender: new FormControl(),
      address: new FormControl(),
      email: new FormControl(),
      phonenumber: new FormControl(),
      birthday: new FormControl(),
      startday: new FormControl(),
      dept: new FormControl()
    });           
  }

  ngOnInit(): void {
    this.emp = new Object;
    this.empID = this.route.snapshot.params['empID'];
    this.employeeService.getEmp(this.empID).subscribe(
      data => {
        console.log(data);
        this.emp = data;
        this.empForm = this.fb.group({
          firstName: [this.emp.empFirstName,[Validators.required,Validators.pattern("[a-zA-Z ]*")]],
          lastName: [this.emp.empLastName, [Validators.required,Validators.pattern("[a-zA-Z ]*")]],
          gender: [this.emp.empGender, [Validators.required]],
          address: [this.emp.empAddress, [Validators.required]],
          email: [this.emp.empEmail,[Validators.required, Validators.email]],
          phonenumber: [this.emp.empPhoneNumber,[Validators.required, Validators.pattern("(03|07|08|09|01[2|6|8|9])+([0-9]{8})")]],
          birthday: [this.dateformat.transform(this.emp.empBirthDay, 'yyyy-MM-dd'), [Validators.required]],
          startday: [this.dateformat.transform(this.emp.empStartDay, 'yyyy-MM-dd'), [Validators.required]],
          dept: [this.emp.user.dept.deptCode, [Validators.required]],
        });
      }, error => console.log(error)
    );
  }

  updateEmp(){
    if(this.empForm.value != null && this.empForm.value != ""){
      this.emp.empFirstName = this.empForm.value.firstName;
      this.emp.empLastName = this.empForm.value.lastName;
      this.emp.empGender = this.empForm.value.gender;
      this.emp.empAddress = this.empForm.value.address;
      this.emp.empEmail = this.empForm.value.email;
      this.emp.empPhoneNumber = this.empForm.value.phonenumber;
      this.emp.empBirthDay = this.empForm.value.birthday;
      this.emp.empStartDay = this.empForm.value.startday;
      this.employeeService.updateEmp(this.empID, this.emp).subscribe(
        data => {
          console.log(data);
          alert("Update Successful!");
        }
      );
      this.gotoList();
    }else{
      alert("Update Failed! Some input form might have invalid value!");
    }
  }

  onSubmit(){
    this.updateEmp();
  }

  gotoList(){
    this.router.navigate(['/employee/list']);
  }
}
