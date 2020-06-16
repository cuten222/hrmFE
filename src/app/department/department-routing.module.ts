import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentUpdateComponent } from './department-update/department-update.component';
import { DepartmentCreateComponent } from './department-create/department-create.component';


const routes: Routes = [
  {path: 'list', component: DepartmentListComponent, resolve: {}},
  {path: 'detail/:deptID', component: DepartmentDetailComponent},
  {path: 'update/:deptID', component: DepartmentUpdateComponent},
  {path: 'create', component: DepartmentCreateComponent},

  { path: '',   redirectTo: '/department/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
