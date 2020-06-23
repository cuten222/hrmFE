import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillListComponent } from './skill-list/skill-list.component';
import { SkillUpdateComponent } from './skill-update/skill-update.component';
import { SkillCreateComponent } from './skill-create/skill-create.component';


const routes: Routes = [
  {path: 'list', component: SkillListComponent, resolve: {}},
  {path: 'update/:skillID', component: SkillUpdateComponent},
  {path: 'create', component: SkillCreateComponent},

  {path: '',redirectTo: '/skill/list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillRoutingModule { }
