import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'department', loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule) }, //lazy load module
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) }, //lazy load module

  { path: '',   redirectTo: '/employee/list', pathMatch: 'full' }, // redirect to list emp
  { path: '**', component: PageNotFoundComponent } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
