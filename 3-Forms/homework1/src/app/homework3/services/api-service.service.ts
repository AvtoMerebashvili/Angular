import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { environment } from '../enviroments/enviroment';
import { body } from '../interfaces/body';
import { Person } from '../interfaces/person';

@Injectable()
export class ApiServiceService { 

  $current:Subject<Person> = new Subject();

  constructor(
    private http:HttpClient,
  ) { }

  one(id:number | string | undefined){
    console.log(id)
  let current = this.http.get<Person>(`${environment.api}/data/${id}`)
  current.subscribe(value =>{
    this.$current.next(value)
  })
  this.$current = new Subject()
  return this.http.get<Person>(`${environment.api}/data/${id}`)
  }

  all(){
  return this.http.get<Person[]>(`${environment.api}/data`)
  }

  create(person:Person){
    return this.http.post<Person>(`${environment.api}/data`, person);
  }

  update(person:Person){
    return this.http.put<Person>(`${environment.api}/data/${person.id}`,person)
  }

  delete(id: number){
    return this.http.delete<Person>(`${environment.api}/data/${id}`)
  }
}
