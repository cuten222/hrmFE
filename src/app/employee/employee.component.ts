import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees = [];
  // const request = {};
  empsLimit: any = [];
  start: number = 0;
  pageSize: number = 5;
  currentPage: number = 0;

  constructor(private empService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.getEmps();
    this.EmpLimit();
  }

  //get all employee
  getEmps(): void { 
    this.empService.getEmps().subscribe(employees => (this.employees = employees));
  }
  //get Employee with limit result
  EmpLimit(){
    this.empService.getLimitEmp(this.start, this.pageSize).subscribe(
      data => this.empsLimit = data
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

  empDetail(empID: number) {
    this.router.navigate(['employeedetails', empID]);
  }

  empUpdate(empID: number) {
    this.router.navigate(['employeeupdate', empID]);
  }

  empCreate() {
    this.router.navigate(['employeecreate']);
  }

}
