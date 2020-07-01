import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    EmployeeUpdateComponent,
    EmployeeCreateComponent,
    EmployeeListComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})

export class EmployeeModule { }
