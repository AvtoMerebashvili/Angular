import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../../../entity/person.entity';
import { FormServiceService } from '../../../services/form-service.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  pages:number[]= [];
  show:Person[] = [];

  @Input() people: any;
  @Output() delete = new EventEmitter();

  constructor( ) { }

  ngOnInit(): void {
    this.createPages()
    for(let i=0; i<=3; i++){
      if(this.people[i])this.show.push(this.people[i])
    }
  }

  onDelete(value:number){
    let index:number = 0;
    this.people.map((person:Person, i:number, array:Person[] ) => {
        if(person?.id == value){
          array.splice(i,1);
          index = i;
        }
    })
    this.createShow(this.getPage(index))
    this.popPages()
    this.delete.emit(value)
  }


  clicked(num:number){
    this.createShow(num)
  }

  private createPages(){
    if(Array.isArray(this.people)){
      for(let i = 1; i<=Math.ceil(this.people.length/4) ; i++){
        if(this.pages.every(value => value != i))this.pages.push(i)
      }
    } 
  }

  private popPages(){
    if(Array.isArray(this.people)){
      while(this.pages.length > Math.ceil(this.people.length/4)){
        this.pages.pop()
      }
    } 
  }

  private createShow(num: number){
    this.show = [];
    for(let i=num*4; i<=num*4+3; i++){
      if(this.people[i])this.show.push(this.people[i])
    }
  }

  private getPage(num:number){
    while(num%4 != 0){
      num--;
    }
    return num/4
  }
}
