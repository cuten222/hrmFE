import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/project/service/project.service';
import { ProjectTypeService } from 'src/app/project/service/project-type.service';
import { Router } from '@angular/router';
import { SkillService } from '../service/skill.service';

@Component({
  selector: 'app-skill-create',
  templateUrl: './skill-create.component.html',
  styleUrls: ['./skill-create.component.css']
})
export class SkillCreateComponent implements OnInit {
  skill: any = new Object;
  skillForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: SkillService,
    private router: Router) {
      this.skillForm = this.fb.group({
        skillCode: ['', [Validators.required]],
        description: [''],
      });
     }

  ngOnInit(): void {
  }

  save(){
    this.skill.skillCode = this.skillForm.value.skillCode;
    this.skill.description = this.skillForm.value.description;
    this.service.create(this.skill).subscribe(
      data => {
        alert("Create Successful!")
        this.gotoList();
      }, error => alert("Create Failed!")
    );
  }

  onSubmit(){
    this.save();
  }

  gotoList(){
    this.router.navigate(['/skill/list'])
  }
}
