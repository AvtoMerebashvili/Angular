import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataManagerService } from '../../services/data-manager.service';
import { HttpService } from '../../services/http.service';
import { ObservablesService } from '../../../../shared/services/observables.service';
import { User } from '../../entity/user';


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

  @Output() change = new EventEmitter()
  
  constructor(
    private dataManager: DataManagerService,
    private http: HttpService,
    private router: Router,
    private observable: ObservablesService
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
    // this.users = this.users?.filter(user => user.id == this.currentUser?.id ? undefined : user) 
    this.delete = false;
    this.currentUser = undefined;
    this.change.emit()
    localStorage.clear()
    this.observable.token = localStorage.getItem('token')
    this.router.navigate(['/LogIn'])
  }

  onDeleteCancel(){
    this.delete = false;
    this.currentUser=undefined;
  }


  onSubmit(value:User){
    this.currentUser = value;
    this.updateStatus=false;
    this.change.emit()
  }

}
