import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  updateStatus:boolean = false;

  form:FormGroup = new FormGroup({
    mail: new FormControl('', [Validators.pattern('[a-z0-9]+\\@[a-z]+(\\.[a-z]+)+$'), Validators.required]),
    password: new FormControl('',[Validators.minLength(7),Validators.pattern('^[a-zA-Z0-9]*$') ,Validators.required]) ,
    confirmPassword: new FormControl('',[Validators.minLength(7),Validators.pattern('^[a-zA-Z0-9]*$') , Validators.required]),
    nickname: new FormControl('', [Validators.pattern('^[a-zA-Z0-9\\-]*$'), Validators.required]),
    phoneNumber: new FormControl('+380',[Validators.pattern('(\\+380)\\d\\d\\d\\d\\d\\d\\d\\d\\d$'), Validators.required]),
    website: new FormControl('',[Validators.pattern('[a-z0-9]+(\\.[a-z0-9]+)+$'), Validators.required]),
    checkBox: new FormControl(false,Validators.requiredTrue),
  });

  constructor(
     private dataManager: DataManagerService
  ) { }

  ngOnInit(): void {
  }

}
