import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObservablesService {

  token:null | string = null;

  constructor() { 
    this.token = localStorage.getItem("token")
  }
}
