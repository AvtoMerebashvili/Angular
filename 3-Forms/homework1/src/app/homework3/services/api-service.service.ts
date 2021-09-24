import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../enviroments/enviroment';

@Injectable()
export class ApiServiceService { 
  constructor(
    private http:HttpClient,
    
  ) { }

  all(){
  return this.http.get(environment.api + '/data')
  }
}
