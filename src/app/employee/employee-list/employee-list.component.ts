import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees = [];
  empsLimit: any = [];
  skill: any = [];
  start: number = 0;
  pageSize: number = 5;
  currentPage: number = 0;

  constructor(private empService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmps();
    this.EmpLimit();
  }

  //get all employee
  getEmps(): void { 
    this.empService.getEmps().subscribe((employees:any) => {
      this.employees = employees;
    });
  }
  //get Employee with limit result
  EmpLimit(){
    this.empService.getLimitEmp(this.start, this.pageSize).subscribe(
      data => {
        this.empsLimit = data
        console.log("data: ",this.empsLimit);
        
      }

    );
  }
  
  //get limit of next page
  getLimit(start, limit, current){
    this.currentPage = current;
    this.EmpLimit();
  }
  
  numberOfPages(){
    return Math.ceil(this.employees.length/this.pageSize);
  }

  deleteEmp(empID: number) {

    if (confirm("do you want to delete?")) {
      this.empService.deleteEmp(empID).subscribe(
        data => {
          console.log('data: ', data);
          alert(`Delete Successful! ${data}`);
          this.EmpLimit();
        }, error => console.log(error)
      );
    }

  }

  empUpdate(empID: number) {
    this.router.navigate(['employee/update', empID]);
  }

  empCreate() {
    this.router.navigate(['employee/create']);
  }
}
