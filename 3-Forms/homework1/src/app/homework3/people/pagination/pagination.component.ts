import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../../interfaces/person';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  pages:any[]= [1];
  show:Person[] = [];

  @Input() people: any;
  @Output() update = new EventEmitter()
  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.createPages()
    for(let i=0; i<=3; i++){
      if(this.people[i])this.show.push(this.people[i])
    }
  }

  onDelete(value:Person){
    this.delete.emit(value)
    this.popPages()
  }

  onUpdate(value:Person){
    this.update.emit(value)
    this.createPages()
  }

  clicked(num:number){
    this.show = [];
    for(let i=num*4; i<=num*4+3; i++){
      if(this.people[i])this.show.push(this.people[i])
    }
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
}
