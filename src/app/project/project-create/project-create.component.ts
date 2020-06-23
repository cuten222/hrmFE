import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from '../service/project.service';
import { Router } from '@angular/router';
import { ProjectTypeService } from '../service/project-type.service';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {
  project: any = new Object;
  projectType:any = [];
  projectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: ProjectService,
    private typeService: ProjectTypeService,
    private router: Router
  ) {
    this.projectForm = this.fb.group({
      projectName: ['', [Validators.required]],
      dateStart: ['', [Validators.required]],
      dateEnd: [''],
      description: [''],
      estimate: ['', [Validators.required]],
      projectType: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {
    this.typeService.gets().subscribe(
      data => this.projectType = data
    );
  }

  save(){
    this.project.projectName = this.projectForm.value.projectName;
    this.project.dateStart = this.projectForm.value.dateStart;
    this.project.estimate = this.projectForm.value.estimate;
    this.project.dateEnd = this.projectForm.value.dateEnd;
    this.project.description = this.projectForm.value.description;
    this.project.type_id = this.projectForm.value.projectType;
    this.service.create(this.project).subscribe(
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
    this.router.navigate(['/project/list'])
  }
}
