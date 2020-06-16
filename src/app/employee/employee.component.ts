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

  constructor(private empService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.getEmps();
  }

  getEmps(): void {
    this.empService.getEmps().subscribe(employees => (this.employees = employees));
  }

  deleteEmp(empID: number) {

    if (confirm("do you want to delete?")) {
      this.empService.deleteEmp(empID).subscribe(
        data => {
          console.log('data: ', data);
          alert(`Delete Successful! ${data}`);
          this.getEmps();
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
