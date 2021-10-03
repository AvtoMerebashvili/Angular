import { Injectable } from '@angular/core';
import { Person } from '../entity/person.entity';

@Injectable()
export class FormServiceService {

  currentPerson: Person | undefined;

  constructor() { }

  call(person:Person | undefined = undefined){
    this.currentPerson = person;
  }

}
