import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  project: any = [];
  limitProject: any = [];
  start: number = 0;
  pageSize: number = 5;
  currentPage: number = 0;

  constructor(private service: ProjectService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllProject();
    this.getLimitProject();
  }

  getAllProject(){
    this.service.gets().subscribe(
      data => {
        console.log("project data: ", data);
        this.project = data;
      }
    );
  }

  getLimitProject(){
    this.service.getLimit(this.start, this.pageSize).subscribe(
      data => {
        console.log("project limit data: ", data);
        this.limitProject = data;
      }
    );
  }

  getLimit(start, limit, current){
    this.currentPage = current;
    this.getLimitProject();
  }

  numberOfPages(){
    return Math.ceil(this.project.length/this.pageSize)
  }

  deleteProject(projectID: number) {
    if (confirm("do you want to delete?")) {
      this.service.delete(projectID).subscribe(
        data => {
          console.log('data: ', data);
          alert(`Delete Successful! ${data}`);
          this.getLimitProject();
        }, error => console.log(error)
      );
    }
  }

  updateProject(projectID: number) {
    this.router.navigate(['project/update', projectID]);
  }

  createProject() {
    this.router.navigate(['project/create']);
  }
}
