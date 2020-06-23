import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { SkillService } from '../service/skill.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skill-update',
  templateUrl: './skill-update.component.html',
  styleUrls: ['./skill-update.component.css']
})
export class SkillUpdateComponent implements OnInit {
  skillForm: FormGroup;
  skillID: number;
  skill: any;
  // dateformat = new DatePipe('en-US');
  
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: SkillService,
  ) {
    this.skillForm = new FormGroup({
      skillCode: new FormControl(),
      description: new FormControl(),

   });
   }

  ngOnInit(): void {
    this.skill = new Object;
    this.skillID = this.route.snapshot.params['skillID'];
    this.service.get(this.skillID).subscribe(
      data => {
        this.skill = data;
        this.skillForm = this.fb.group({
          skillCode: [this.skill.skillCode, [Validators.required]],
          description: [this.skill.description],
        });
      },
      error => console.log(error)
    );
  }

  updateSkill(){
    if(this.skill != null && this.skill != ""){
      this.skill.skillCode = this.skillForm.value.skillCode;
      this.skill.description = this.skillForm.value.description;
     
      this.service.update(this.skillID, this.skill).subscribe(
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
    this.updateSkill();
  }

  gotoList(){
    this.router.navigate(['/skill/list']);
  }

}
