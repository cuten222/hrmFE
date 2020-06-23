import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';
import { ProjectCreateComponent } from './project-create/project-create.component';


const routes: Routes = [
  {path: 'list', component: ProjectListComponent, resolve: {}},
  {path: 'update/:projectID', component: ProjectUpdateComponent},
  {path: 'create', component: ProjectCreateComponent},

  {path: '',redirectTo: '/project/list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
