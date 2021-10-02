import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Person } from '../../../entity/person.entity';
import { ApiServiceService } from '../../../services/api-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employee$ = this.http.$current
  
  constructor(private http:ApiServiceService) { }

  ngOnInit(): void {
    this.employee$.subscribe(
      value => {console.log(value)}
    )
  }

}
