import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservablesService {

  $token = new Subject<string | undefined | null>()
  token$ = this.$token.asObservable()

  constructor() { }
}
