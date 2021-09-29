import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataManagerService } from '../services/data-manager.service';
import { HttpService } from '../services/http.service';
import { User } from '../user';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  updateStatus:boolean = false;
  delete = false;
  currentUser: User | undefined;

  users$ = this.http.all()

  @Input() users:User[] | undefined;
  @Output() change = new EventEmitter()
  
  constructor(
    private dataManager: DataManagerService,
    private http: HttpService
  ) { }

  ngOnInit(): void {
  }

  onEdit(user:User){
    this.updateStatus=true;
    this.currentUser = user;
  }

  onDelete(user:User){
    this.delete = true;
    this.currentUser=user;
  }

  onDeleteSubmit(){
    if(this.currentUser) this.http.delete(this.currentUser.id).subscribe()
    this.users = this.users?.filter(user => user.id == this.currentUser?.id ? undefined : user) 
    this.delete = false;
    this.currentUser = undefined;
    this.change.emit()
  }

  onDeleteCancel(){
    this.delete = false;
    this.currentUser=undefined;
  }


  onSubmit(value:boolean){
    this.updateStatus=value;
    this.change.emit()
  }

}
