import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiServiceService } from '../services/api-service.service';
import { FormServiceService } from '../services/form-service.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  
  people$ = this.http.all()
    .pipe(
      map(response => response.data
      )
    );

  constructor(
    private http: ApiServiceService,
    private form: FormServiceService

  ) {    
  }

  ngOnInit(): void {
  }

  onDelete(id:number){
    this.http.delete(id).subscribe(
      response => {console.log(response)}
    )
  }

  create(){
    this.form.call();
  }

}
