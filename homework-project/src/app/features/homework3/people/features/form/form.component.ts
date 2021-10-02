import { Component,  Input,  OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Person } from '../../../entity/person.entity';
import { OnChanges } from '@angular/core'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges  {
  @Input() updateEmployee:Person | undefined; 

  @Output() register = new EventEmitter()
  @Output() update = new EventEmitter()

  form:FormGroup = new FormGroup({
    name: new FormControl("",[Validators.required]),
    salary: new FormControl("",[Validators.required]),
    age: new FormControl("",[Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.form.patchValue({
      name: this.updateEmployee?.employee_name,
      salary: this.updateEmployee?.employee_salary,
      age: this.updateEmployee?.employee_age
    })
  }

  submit(){
    if(this.form.valid){
      let person = {
        "employee_name":<string>(this.form.value.name).toString(),
        "employee_salary":<string>(this.form.value.salary).toString(),
        "employee_age":<string>(this.form.value.age).toString(),
        "profile_image":<string>""
      }
      
      this.form.reset()
      
      this.updateEmployee?.update ? this.update.emit({...person, id:this.updateEmployee.id}) : this.register.emit(person)
    }else{
      window.alert("user didn't registerd")
    }
  }

}