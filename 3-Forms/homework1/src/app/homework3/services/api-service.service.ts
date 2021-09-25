import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../enviroments/enviroment';
import { Person } from '../interfaces/person';

@Injectable()
export class ApiServiceService { 
  constructor(
    private http:HttpClient,
    
  ) { }

  all(){
  return this.http.get<Person[]>(`${environment.api}/data`)
  }

  create(person:Person){
    return this.http.post(`${environment.api}/data`, person);
  }
}
