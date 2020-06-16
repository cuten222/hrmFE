import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { __values } from 'tslib';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

//create function to not allow deptcode name in user[]
export function forbiddenUsername(deptCode = []) {
  return (c: AbstractControl) => {
    return (deptCode.includes(c.value)) ? {
      invalidDeptCode: true
    } : null;
  };
}

@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.css']
})

export class DepartmentCreateComponent implements OnInit {
  dept: any = new Object;
  submitted = false;
  deptForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private deptService: DepartmentService,
    private router: Router,
  ) {
    this.deptForm = this.fb.group({
      deptCode: ['', [Validators.required, Validators.maxLength(3),Validators.pattern("[a-zA-Z ]*")]],
      deptName: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {

  }

  save(){
    // this.deptService.createDept(this.dept).subscribe(
    //   data => {
    //     console.log(data);
    //     this.dept = Object;
    //     alert("Create Successful!");
    //     this.gotoList();
    //   },
    //   error => {
    //     console.log(error);
    //     alert("Create Failed!");
    //   }
    // );
    this.dept.deptCode = this.deptForm.value.deptCode;
     this.dept.deptName = this.deptForm.value.deptName;
    this.deptService.createDept(this.dept).subscribe(
      data => {
        alert("Create Successful!")
        this.gotoList();
      }, error => alert("Create Failed!")
    );
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/department/list'])
  }
}
