import { Component, OnInit } from '@angular/core';
import { Person } from '../../interfaces/person';
import { ApiServiceService } from '../../services/api-service.service';
import { FormServiceService } from '../../services/form-service.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent implements OnInit {

  lastValue:Person | undefined = this.form.currentPerson

  constructor(
    private form:FormServiceService,
    private http: ApiServiceService
  ) { }

  ngOnInit(): void {
   if(this.lastValue)this.lastValue.update = true
  }

  onUpdate(person: Person){
    this.http.update(person).subscribe()
    window.alert("user successfully updated")
  }

}
