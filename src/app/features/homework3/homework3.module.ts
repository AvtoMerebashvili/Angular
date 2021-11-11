import { NgModule } from '@angular/core';
import { PeopleComponent } from './people/people.component';
import { EmployeesComponent } from './people/features/employees/employees.component'
import { EmployeeRegisterComponent } from './people/features/employee-register/employee-register.component';
import { RouterModule } from '@angular/router';
import { ApiServiceService } from './services/api-service.service'
import { EmployeeComponent } from './people/features/employee/employee.component';
import { PaginationComponent } from './people/features/pagination/pagination.component';
import { EmployeeUpdateComponent } from './people/features/employee-update/employee-update.component';
import { FormComponent } from './people/features/form/form.component';
import { FormServiceService } from './services/form-service.service';
import { SharedModule } from 'src/app/shared/shared.module';

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
    SharedModule,
    RouterModule.forChild([
      {
        path: '', 
        component: PeopleComponent,
      },
      {
        path: 'register', 
        component: EmployeeRegisterComponent
      },
      {
        path: ':id', 
        component: EmployeeComponent
      },
      {
        path: 'update/:id', 
        component: EmployeeUpdateComponent
      }
    ])
  ],
  exports:[
    PeopleComponent,
    EmployeesComponent,
    EmployeeRegisterComponent,
    EmployeeComponent,
    PaginationComponent,
    EmployeeUpdateComponent,
    FormComponent,
  ],
  providers:[
    ApiServiceService,
    FormServiceService
  ]
})
export class homework3Module { }
