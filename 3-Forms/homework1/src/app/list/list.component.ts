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

  onDelete(id:number){
    this.dataManager.deleteUser(id)
    this.users = this.dataManager.takeUsers();
  }
}
