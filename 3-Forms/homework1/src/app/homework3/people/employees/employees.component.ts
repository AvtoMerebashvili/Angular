import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../../interfaces/person';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  @Input() person: any;
  @Output() update = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor(private http:ApiServiceService) { }

  ngOnInit(): void {
  }

  getById(id:number | string | undefined){
    this.http.one(id)
  }

}
