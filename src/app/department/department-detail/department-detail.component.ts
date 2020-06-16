import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  deptID: number;
  dept: any;

  constructor(private deptService: DepartmentService,
              private router: Router,
              private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.dept = new Object;

    this.deptID = this.route.snapshot.params['deptID'];
    console.log(this.deptID);
    

    this.deptService.getDept(this.deptID).subscribe(
      data => {
        console.log(data);
        this.dept = data;
      },
      error => console.log(error) 
    );
    console.log(this.dept.deptCode);
    
  }
  
  list(){
    this.router.navigate(['department/list']);
  }

}
