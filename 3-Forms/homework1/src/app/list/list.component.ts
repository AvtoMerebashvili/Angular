import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
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
  users:User[]=[];
  constructor(
    private dataManager: DataManagerService
  ) { }

  ngOnInit(): void {
    this.users = this.dataManager.takeUsers();
    
  }

  onEdit(id:number){
    this.updateStatus=true;
    this.dataManager.getUser(id)
  }

  onSubmit(value:boolean){
    this.updateStatus=value;
  }

  onDelete(user:User){
    this.delete = true;
    this.currentUser=user;
  }

  onDeleteSubmit(){
    this.dataManager.deleteUser(this.currentUser?.id)
    this.users = this.dataManager.takeUsers();
    this.delete = false;
    this.currentUser = undefined;
  }

  onDeleteCancel(){
    this.delete = false;
    this.currentUser=undefined;
  }
}
