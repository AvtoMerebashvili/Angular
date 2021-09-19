import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { currency } from './CurrencyInteface'
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private _URL = "http://data.fixer.io/api/latest?access_key=9c27cfc2dad8f1fba176946d8ec280f5"
 
  constructor(
    private http: HttpClient
  ) { }

  getData(){
    return this.http.get<currency>(this._URL);
  }
}
