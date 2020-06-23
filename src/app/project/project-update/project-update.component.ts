import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../service/project.service';
import { DatePipe } from '@angular/common';
import { ProjectTypeService } from '../service/project-type.service';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css']
})
export class ProjectUpdateComponent implements OnInit {
  projectForm: FormGroup;
  projectID: number;
  project: any;
  projectType: any = [];
  dateformat = new DatePipe('en-US');

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: ProjectService,
    private typeService: ProjectTypeService) { 
      this.projectForm = new FormGroup({
        projectName: new FormControl(),
        dateStart: new FormControl(),
        estimate: new FormControl(),
        dateEnd: new FormControl(),
        description: new FormControl(),
        projectType: new FormControl()
     });
    }

  ngOnInit(): void {
    this.project = new Object;
    this.projectID = this.route.snapshot.params['projectID'];
    this.service.get(this.projectID).subscribe(
      data => {
        this.project = data;
        console.log(this.project.projectType.typeName);
        this.projectForm = this.fb.group({
          projectName: [this.project.projectName, [Validators.required]],
          dateStart: [this.dateformat.transform(this.project.dateStart, 'yyyy-MM-dd'), [Validators.required]],
          estimate: [this.dateformat.transform(this.project.estimate, 'yyyy-MM-dd'), [Validators.required]],
          dateEnd: [this.dateformat.transform(this.project.dateEnd, 'yyyy-MM-dd')],
          description: [this.project.description],
          projectType: [this.project.projectType.id, [Validators.required]]
        });
      },
      error => console.log(error)
    );
    this.typeService.gets().subscribe(
      data => this.projectType = data
    );
  }

  updateProject(){
    if(this.project != null && this.project != ""){
      this.project.projectName = this.projectForm.value.projectName;
      this.project.dateStart = this.projectForm.value.dateStart;
      this.project.estimate = this.projectForm.value.estimate;
      this.project.dateEnd = this.projectForm.value.dateEnd;
      this.project.description = this.projectForm.value.description;
      this.project.type_id = this.projectForm.value.projectType;
      this.service.update(this.projectID, this.project).subscribe(
       data => {
         alert("Update Successful!");
         this.gotoList()
       }
    );
    }else{
      alert("Update Failed!")
    }
   }

   onSubmit(){
    this.updateProject();
  }

  gotoList(){
    this.router.navigate(['/project/list']);
  }
}
