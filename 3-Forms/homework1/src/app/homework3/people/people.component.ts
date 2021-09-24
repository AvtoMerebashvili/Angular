import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
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


  ngOnInit(): void {
    this.http.all()
    .subscribe(
      (value) => {
        console.log(value)
      }
    )
  }

}
