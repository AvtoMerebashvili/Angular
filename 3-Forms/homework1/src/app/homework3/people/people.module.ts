import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { PersonComponent } from './person/person.component';
import { RegistratorComponent } from './registrator/registrator.component';
import { RouterModule } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service'
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PeopleComponent,
    PersonComponent,
    RegistratorComponent,
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
    RegistratorComponent,
  ],
  providers:[
    ApiServiceService
  ]
})
export class PeopleModule { }
