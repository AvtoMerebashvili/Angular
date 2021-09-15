import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  private Users:User[] = [];
  
  cloneUsers = this.Users;

  constructor() { }

  addUser(user:User){
    this.Users.push(user)
    this.cloneUsers = this.Users
    console.log(this.cloneUsers)
  }

}
