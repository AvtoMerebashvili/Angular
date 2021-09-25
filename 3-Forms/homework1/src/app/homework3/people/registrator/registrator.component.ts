import { Component,  OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import { EventEmitter } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-registrator',
  templateUrl: './registrator.component.html',
  styleUrls: ['./registrator.component.scss']
})
export class RegistratorComponent implements OnInit {

  // @Output() register = new EventEmitter()

  form:FormGroup = new FormGroup({
    name: new FormControl(),
    salary: new FormControl(),
    age: new FormControl()
  });

  constructor(
    private http: ApiServiceService
  ) { }

  submit(){
    let person = {
      employee_name:<string>this.form.value.name,
      employee_salary:<number>this.form.value.salary,
      employee_age:<number>this.form.value.age
    }

    this.form.reset()
    // this.register.emit(person)
  }

  ngOnInit(): void {
    // this.form.valueChanges
    //   .pipe(
    //       tap((val) =>{
    //         console.log(this.form.value)
    //       } 
    //     )
    //   ).subscribe()
  }

}
