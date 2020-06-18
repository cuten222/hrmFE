import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';


const routes: Routes = [
  {path: 'list', component: EmployeeListComponent, resolve: {}},
  {path: 'update/:empID', component: EmployeeUpdateComponent},
  {path: 'create', component: EmployeeCreateComponent},

  { path: '',   redirectTo: '/employee/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
