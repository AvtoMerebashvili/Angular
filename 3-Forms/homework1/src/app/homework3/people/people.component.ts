import { Component, OnInit } from '@angular/core';
import { Person } from '../interfaces/person';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  constructor(
    private http: ApiServiceService
  ) {    
  }

  onRegister(person: Person){
    this.http.create(person).subscribe()
  }

  ngOnInit(): void {
    
  }

}
