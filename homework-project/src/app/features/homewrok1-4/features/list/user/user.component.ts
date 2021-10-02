import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { User } from '../../../entity/user.entity';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnChanges {

  @Input() user:User | undefined;
  @Input() currentUpdated: User | undefined;

  @Output() delete = new EventEmitter()
  @Output() edit = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    if(this.user?.id == this.currentUpdated?.id) this.user = this.currentUpdated;

  }

  onEdit(user:User){
    let currentToken = localStorage.getItem('token');
    if(user.token == currentToken){
      this.edit.emit(user)
    }else{
      window.alert(`you haven't permision to edit other user`)
    }
  }

  onDelete(user:User){
    let currentToken = localStorage.getItem('token');
    if(user.token == currentToken){
      this.delete.emit(user)
    }else{
      window.alert("you haven't permision to delete other user")
    }
  }

}

// delete.emit(user)