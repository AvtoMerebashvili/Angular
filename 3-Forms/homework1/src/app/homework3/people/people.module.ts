import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { EmployeesComponent } from './employees/employees.component'
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { RouterModule } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service'
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [
    PeopleComponent,
    EmployeesComponent,
    EmployeeRegisterComponent,
    EmployeeComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'people', component: PeopleComponent},
      {path: 'employee', component: EmployeeComponent}
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
