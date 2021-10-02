import { Component, OnChanges, OnInit } from '@angular/core';
import { map, switchMap, tap } from 'rxjs/operators';
import { Person } from '../entity/person.entity';
import { ApiServiceService } from '../services/api-service.service';
import { FormServiceService } from '../services/form-service.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit, OnChanges {
  
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
    this.getUpdatedData()    
  }

  ngOnChanges(){
    this.getUpdatedData()
  }  

  onDelete(id:number){
    this.http.delete(id).subscribe(
      response => {console.log(response)}
    )
    // this.getUpdatedData()
  }

  create(){
    this.form.call();
  }

  private getUpdatedData(){
  // this.people$ = this.http.all()
  }

}
