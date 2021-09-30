import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ObservablesService } from '../homewrok1-4/services/observables.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit, OnChanges {

  get token(){
    return this.observables.token;
  }  

  constructor(
    private observables: ObservablesService
  ) {}

  ngOnInit(): void {         
    this.observables.token = localStorage.getItem('token')
  }

  ngOnChanges(){
  }

  onLogOut(){
    localStorage.clear()
    this.observables.token  = null
  }

}
