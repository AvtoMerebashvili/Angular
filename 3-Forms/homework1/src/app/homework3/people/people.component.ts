import { Component, OnChanges, OnInit } from '@angular/core';
import { Person } from '../interfaces/person';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit, OnChanges {

  updateEmployee: Person | undefined;
  
  people$ = this.http.all()

  constructor(
    private http: ApiServiceService
  ) {    
  }

  ngOnInit(): void {
    this.getUpdatedData()
  }

  ngOnChanges(){
    this.getUpdatedData()
  }  

  onRegister(person: Person){
    // window.alert("user registerd")
    this.http.create(person).subscribe()
    this.getUpdatedData()
  }

  onUpdate(person: Person){
    // window.alert("user updated")
    this.http.update(person).subscribe()
    this.updateEmployee = undefined;
    this.getUpdatedData()
  }

  onDelete(id:number){
    this.http.delete(id).subscribe()
    this.getUpdatedData(true)
  }

  updateData(person:Person){
    this.updateEmployee = person;
    this.updateEmployee.update = true;
    this.getUpdatedData()
  }

 
  private getUpdatedData(del:boolean = false){

  this.people$ = this.http.all()
  
  }

}
