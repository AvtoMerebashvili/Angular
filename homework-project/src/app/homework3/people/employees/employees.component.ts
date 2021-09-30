import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Person } from '../../interfaces/person';
import { ApiServiceService } from '../../services/api-service.service';
import { FormServiceService } from '../../services/form-service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit, OnChanges {

  @Input() person: any;
  @Output() delete = new EventEmitter();

  constructor(
    private http:ApiServiceService,
    private form: FormServiceService
    ) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
  }
  
  onUpdate(person:Person){
    this.form.call(person)
  }

  getById(id:number | string | undefined){
    this.http.one(id)
  }

}
