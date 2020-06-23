import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillRoutingModule } from './skill-routing.module';
import { SkillListComponent } from './skill-list/skill-list.component';
import { SkillUpdateComponent } from './skill-update/skill-update.component';
import { SkillCreateComponent } from './skill-create/skill-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SkillListComponent, SkillUpdateComponent, SkillCreateComponent],
  imports: [
    CommonModule,
    SkillRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SkillModule { }
