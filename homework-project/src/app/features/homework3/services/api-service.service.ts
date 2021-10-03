import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { environment } from '../enviroments/enviroment';
import { body } from '../entity/body.entity';
import { Person } from '../entity/person.entity';

@Injectable()
export class ApiServiceService { 

  $current:Subject<body> = new Subject();

  constructor(
    private http:HttpClient,
  ) { }

  one(id:number | string | undefined){
  let current = this.http.get<body>(`${environment.api}/employee/${id}`)
  current.subscribe(value =>{
    this.$current.next(value)
  })
  this.$current = new Subject()
  return this.http.get<Person>(`${environment.api}/employee/${id}`)
  }

  all(){
  return this.http.get<body>(`${environment.api}/employees`)
  }

  create(person:Person){
    return this.http.post<Person>(`${environment.api}/create`, person);
  }

  update(person:Person){
    return this.http.put<Person>(`${environment.api}/update/${person.id}`,person)
  }

  delete(id: number){
    return this.http.delete<Person>(`${environment.api}/delete/${id}`)
  }
}
