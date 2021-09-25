import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { PersonComponent } from './person/person.component';
import { EmployeeRegisterComponent } from './employee-register/registrator.component';
import { RouterModule } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service'
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PeopleComponent,
    PersonComponent,
    EmployeeRegisterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'people', component: PeopleComponent}
    ])
  ],
  exports:[
    PeopleComponent,
    PersonComponent,
    EmployeeRegisterComponent,
  ],
  providers:[
    ApiServiceService
  ]
})
export class PeopleModule { }
