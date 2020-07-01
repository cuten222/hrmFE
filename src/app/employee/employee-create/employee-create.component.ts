import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { $ } from 'protractor';
import { SkillService } from 'src/app/skill/service/skill.service';
import { SkillEmpService } from 'src/app/skill/service/skill-emp.service';

interface skill{
  skillID: string;
  level: string;
}
interface skill2{
  skillID: string;
  level: string;
}


@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})

export class EmployeeCreateComponent implements OnInit {

  empForm: FormGroup;
  emp:any = new Object;
  submitted = false;
  skill:any[];
  level:any[];
  listskill: skill[] =  [];
  listskill2: skill2[] =  [];

  constructor(private fb: FormBuilder,
              private employeeService: EmployeeService,
              private skillService : SkillService,
              private skillEmpService: SkillEmpService,
              private router: Router,){
                this.empForm = this.fb.group({
                  firstName: ['', [Validators.required,Validators.pattern("[a-zA-Z ]*")]],
                  lastName: ['', [Validators.required,Validators.pattern("[a-zA-Z ]*")]],
                  gender: ['', [Validators.required]],
                  address: ['', [Validators.required]],
                  email: ['', [Validators.required, Validators.email]],
                  phonenumber: ['', [Validators.required, Validators.pattern("(03|07|08|09|01[2|6|8|9])+([0-9]{8})")]],
                  birthday: ['', [Validators.required]],
                  startday: ['', [Validators.required]],
                  skillID: [''],
                  level: [''],
                  
                });

               }

  ngOnInit(): void {
    this.skillService.gets().subscribe(
      data => {
        this.skill = data;
      }
    )
  }
  
  addNewChoice(){
     this.listskill.push(
       {skillID: '', level: ''}
     )}

  removeChoice(i){
    this.listskill.splice(i,1)
    }
  
    Saveskill(event: Event){
      // alert((event.target as HTMLInputElement).value);
      this.listskill2.push({skillID:(event.target as HTMLInputElement).value.toString(), level: '1'});
      console.log(this.listskill2);
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
