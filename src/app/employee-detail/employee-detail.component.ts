import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee/Employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee/employee.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  empID: number;
  emp: Employee;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) { 

    }

  ngOnInit(): void {
    this.emp = new Employee();

    this.empID = this.route.snapshot.params['empID'];

    this.employeeService.getEmp(this.empID).subscribe(
      data => {
        console.log(data);
        this.emp = data;
      }, error => console.log(error)
    );
  }

  list(){
    this.router.navigate(['employee'])
  }

}
