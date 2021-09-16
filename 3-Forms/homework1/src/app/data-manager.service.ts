import { Injectable } from '@angular/core';
import { find } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  static id:number = 0;

  private Users:User[] = [];

  cloneUsers = this.Users;
  currentUser:User | undefined;

  constructor() { }

  addUser(user:User){
    user.id= ++DataManagerService.id
    this.Users.push(user)
    this.cloneUsers = this.Users
  }

  takeUsers(){
    return this.cloneUsers;
  }

  getUser(Id:number){
    this.currentUser = this.cloneUsers.find(user => user.id == Id)
  }

  updateUser(user:User, id:number | undefined){
    user.id = <number>id;
    this.Users.map(current => {
      current.id == id ? Object.assign(current, user) : current=current
    })
  }

}
