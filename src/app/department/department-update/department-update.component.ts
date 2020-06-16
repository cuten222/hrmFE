import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DepartmentService } from '../department.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-department-update',
  templateUrl: './department-update.component.html',
  styleUrls: ['./department-update.component.css']
})
export class DepartmentUpdateComponent implements OnInit {

  deptForm: FormGroup;
  deptID: number;
  dept: any;
  // dateformat = new DatePipe('en-US');

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private deptService: DepartmentService
  ) { 
    // this.deptForm = this.fb.group({
    //   deptCode: ['',[Validators.required, Validators.maxLength(3),Validators.pattern("[a-zA-Z ]*")]],
    //   deptName: ['',[Validators.required]]
    // });
    this.deptForm = new FormGroup({
      deptCode: new FormControl(),
      deptName: new FormControl()
   });
  }

  ngOnInit(): void {
    this.dept = new Object;
    this.deptID = this.route.snapshot.params['deptID'];
    this.deptService.getDept(this.deptID).subscribe(
      data => {
        console.log(data);
        this.dept = data;
        this.deptForm = this.fb.group({
          deptCode: [this.dept.deptCode,[Validators.pattern("[a-zA-Z ]*"), Validators.required, Validators.maxLength(3)]],
          deptName: [this.dept.deptName,[Validators.required]]
        });
      },
      error => console.log(error)
    );
  }
  updateDept(){
   if(this.dept != null && this.dept != ""){
    this.dept.deptCode = this.deptForm.value.deptCode;
    this.dept.deptName = this.deptForm.value.deptName;
    this.deptService.updateDept(this.deptID, this.dept).subscribe(
      data => {
        alert("Update Successful!");
        this.gotoList()
      }
   );
   }else{
     alert("Update Failed!")
   }
    
  }

  onSubmit(){
    
    this.updateDept();
  }

  gotoList(){
    this.router.navigate(['/department/list']);
  }
}
