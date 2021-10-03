import { Injectable } from '@angular/core';
import { find } from 'rxjs/operators';
import { User } from '../entity/user';

@Injectable()
export class DataManagerService {

  static id:number = 0;

  private Users:User[] = [];

  cloneUsers = this.Users;
  currentUser:User | undefined;

  constructor() { }

  passwordCheck(passw: string, confPassword:string | undefined): boolean{
    if(confPassword == passw)return true 
    else return false
  }

}
