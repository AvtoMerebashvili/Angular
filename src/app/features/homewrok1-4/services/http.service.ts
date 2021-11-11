import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../enviroments/enviroment';
import { User } from "../entity/user"

@Injectable()
export class HttpService {

  constructor(
    private http:HttpClient
  ) { }

  all(){
    return this.http.get<User[]>(`${environment.api}/users`)
  }

  one(id:number){
    return this.http.get<User>(`${environment.api}/users/${id}`)
  }

  delete(id:number){
    return this.http.delete(`${environment.api}/users/${id}`)
  }

  create(user:User){
    return this.http.post(`${environment.api}/users`, user )
  }

  update(user:User | undefined){
    return this.http.put(`${environment.api}/users/${user?.id}`, user)
  }

}
