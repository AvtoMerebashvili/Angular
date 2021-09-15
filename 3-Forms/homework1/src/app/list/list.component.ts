import { Component, Input, OnInit, Output } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { User } from '../user';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users:User[]=[];

  constructor(
    private dataManager: DataManagerService
  ) { }

  ngOnInit(): void {
    this.users = this.dataManager.takeUsers();
  }

  onEdit(id:number){
    this.dataManager.getId(id)
  
  }
}
