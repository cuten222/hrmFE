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
  totalElements: number = 0;

  constructor(private deptService: DepartmentService,
    private router: Router
  ) { }
  

  ngOnInit(): void {
    this.getAllDept({ page: "0", size: "5" });
  }

  getAllDept(request){
    this.deptService.getDepts(request).subscribe(
      data => {
        console.log('dept:', data);
        this.departments = data['content'];
        this.totalElements = data['totalElements'];
      }
    );
  }

  nextPage(event: PageEvent) {
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    this.getAllDept(request);
  }

  deleteDept(deptID: number) {
    if (confirm("do you want to delete?")) {
      this.deptService.deleteDept(deptID).subscribe(
        data => {
          console.log('data: ', data);
          alert(`Delete Successful! ${data}`);
          this.getAllDept({ page: "0", size: "5" });
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
