import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { EmployeesComponent } from './features/employees/employees.component'
import { EmployeeRegisterComponent } from './features/employee-register/employee-register.component';
import { RouterModule } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service'
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './features/employee/employee.component';
import { PaginationComponent } from './features/pagination/pagination.component';
import { EmployeeUpdateComponent } from './features/employee-update/employee-update.component';
import { FormComponent } from './features/form/form.component';


@NgModule({
  declarations: [
    PeopleComponent,
    EmployeesComponent,
    EmployeeRegisterComponent,
    EmployeeComponent,
    PaginationComponent,
    EmployeeUpdateComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'employees', component: PeopleComponent},
      {path: 'employees/:id', component: EmployeeComponent},
      {path: 'employee/register', component: EmployeeRegisterComponent},
      {path: 'employee/:id', component: EmployeeUpdateComponent}
    ])
  ],
  exports:[
    PeopleComponent,
    EmployeesComponent,
    EmployeeRegisterComponent,
  ],
  providers:[
    ApiServiceService
  ]
})
export class PeopleModule { }
