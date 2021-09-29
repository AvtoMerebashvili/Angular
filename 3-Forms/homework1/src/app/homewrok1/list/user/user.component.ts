import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user:User | undefined;

  @Output() delete = new EventEmitter()
  @Output() edit = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }


}
