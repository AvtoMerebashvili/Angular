import { Injectable } from '@angular/core';
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
    // console.log(this.cloneUsers)
  }

  takeUsers(){
    return this.cloneUsers;
  }

  getId(Id:number){
    console.log(Id)
    let f =  this.cloneUsers.find(user => user.id == Id)
    console.log(f)
  }

}
