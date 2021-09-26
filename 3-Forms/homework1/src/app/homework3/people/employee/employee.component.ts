import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Person } from '../../interfaces/person';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employee$ = this.http.$current
  employee: Person ={
    employee_name: "",
    employee_age: 0,
    employee_salary: 0
  };
  constructor(private http:ApiServiceService) { }

  ngOnInit(): void {
    this.employee$.subscribe(
      value => {console.log(value)}
    )
  }

}
