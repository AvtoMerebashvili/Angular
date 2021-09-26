import { Component, OnInit } from '@angular/core';
import { Person } from '../interfaces/person';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  updateEmployee: Person | undefined;

  people$ =  this.http.all()
  
  constructor(
    private http: ApiServiceService
  ) {    
  }

  ngOnInit(): void {
  }

  onRegister(person: Person){
    this.http.create(person).subscribe()
    this.people$ = this.http.all()
  }

  onUpdate(person: Person){
    this.http.update(person).subscribe()
    this.people$ = this.http.all()
  }

  onDelete(id:number){
    this.http.delete(id).subscribe()
    this.people$ = this.http.all()
  }

  updateData(person:Person){
    this.updateEmployee = person;
    this.updateEmployee.update = true;
  }

}
