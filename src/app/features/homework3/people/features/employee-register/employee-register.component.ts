import { Component,  Input,  OnInit, Output } from '@angular/core';
import { Person } from '../../../entity/person.entity';
import { OnChanges } from '@angular/core'
import { FormServiceService } from '../../../services/form-service.service';
import { ApiServiceService } from '../../../services/api-service.service';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.scss']
})
export class EmployeeRegisterComponent implements OnInit, OnChanges {

  constructor(
    private http: ApiServiceService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
  }

  onRegister(person: Person){
    console.log(person)
    this.http.create(person).subscribe()
    window.alert("user successfully registered")
  }

}
