import { Injectable } from '@angular/core';
import { Person } from '../interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  currentPerson: Person | undefined;

  constructor() { }

  call(person:Person | undefined = undefined){
    this.currentPerson = person;
  }

}
