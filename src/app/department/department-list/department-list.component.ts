import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from '../department.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  departments: any = [];
  limitDepartment:any = [];
  start: number = 0;
  pageSize: number = 5;
  currentPage: number = 0;


  constructor(private deptService: DepartmentService,
    private router: Router
  ) { }
  

  ngOnInit(): void {
    this.getAllDept();
    this.getLimitDept();
  }

  getAllDept(){
    this.deptService.getDepts().subscribe(
      data => {
        console.log('dept:', data);
        this.departments = data;
      }
    );
  }

  getLimitDept(){
    this.deptService.getLimitDept(this.start, this.pageSize).subscribe(
      data => this.limitDepartment = data
    );
  }

  getLimit(start, limit, current){
    this.currentPage = current;
    this.getLimitDept();
  }

  numberOfPages(){
    return Math.ceil(this.departments.length/this.pageSize)
  }

  deleteDept(deptID: number) {
    if (confirm("do you want to delete?")) {
      this.deptService.deleteDept(deptID).subscribe(
        data => {
          console.log('data: ', data);
          alert(`Delete Successful! ${data}`);
          this.getAllDept();
        }, error => console.log(error)
      );
    }
  }

  deptDetail(deptID: number) {
    this.router.navigate(['department/detail', deptID]);
    console.log(deptID);
    
  }

  deptUpdate(deptID: number) {
    this.router.navigate(['department/update', deptID]);
  }

  deptCreate() {
    this.router.navigate(['department/create']);
  }

}
