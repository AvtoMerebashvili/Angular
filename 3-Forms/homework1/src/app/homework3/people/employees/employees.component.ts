import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit, OnChanges {

  @Input() person: any;
  @Output() update = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor(private http:ApiServiceService) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
  }

  getById(id:number | string | undefined){
    this.http.one(id)
  }

}
