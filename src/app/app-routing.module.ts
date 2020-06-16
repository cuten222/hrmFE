import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'employeedetails/:empID', component: EmployeeDetailComponent },
  { path: 'employeecreate', component: EmployeeCreateComponent },
  { path: 'employeeupdate/:empID', component: UpdateEmployeeComponent },
  { path: 'department', loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule) }, //lazy load module

  { path: '',   redirectTo: '/employee', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
