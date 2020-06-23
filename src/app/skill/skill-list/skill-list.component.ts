import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/project/service/project.service';
import { SkillService } from '../service/skill.service';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {
  skill: any = [];
  limitSkill: any = [];
  start: number = 0;
  pageSize: number = 5;
  currentPage: number = 0;

  constructor(
    private service: SkillService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllSkill();
    this.getLimitSkill();
  }

  getAllSkill(){
    this.service.gets().subscribe(
      data => {
        console.log("project data: ", data);
        this.skill = data;
      }
    );
  }

  getLimitSkill(){
    this.service.getLimit(this.start, this.pageSize).subscribe(
      data => {
        console.log("project limit data: ", data);
        this.limitSkill = data;
      }
    );
  }

  getLimit(start, limit, current){
    this.currentPage = current;
    this.getLimitSkill();
  }

  numberOfPages(){
    return Math.ceil(this.skill.length/this.pageSize)
  }

  deleteSkill(skillID: number) {
    if (confirm("do you want to delete?")) {
      this.service.delete(skillID).subscribe(
        data => {
          console.log('data: ', data);
          alert(`Delete Successful! ${data}`);
          this.getLimitSkill();
        }, error => console.log(error)
      );
    }
  }

  updateSkill(skillID: number) {
    this.router.navigate(['skill/update', skillID]);
  }

  createSkill() {
    this.router.navigate(['skill/create']);
  }

}
