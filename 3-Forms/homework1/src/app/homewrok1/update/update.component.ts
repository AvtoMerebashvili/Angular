import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataManagerService } from '../data-manager.service';
import { User } from '../user';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnChanges {

  @Input() edit:boolean = false;
  @Output() submited = new EventEmitter()

  form:FormGroup = new FormGroup({
    mail: new FormControl('', [Validators.pattern('[a-zA-Z0-9]+\\@[a-zA-Z]+(\\.[a-zA-Z]+)+$'), Validators.required]),
    password: new FormControl('',[Validators.minLength(7),Validators.pattern('^[a-zA-Z0-9]*$') ,Validators.required]) ,
    confirmPassword: new FormControl('',[Validators.minLength(7),Validators.pattern('^[a-zA-Z0-9]*$') , Validators.required]),
    nickname: new FormControl('', [Validators.pattern('^[a-zA-Z0-9\\-]*$'), Validators.required]),
    phoneNumber: new FormControl('+380',[Validators.pattern('(\\+380)\\d\\d\\d\\d\\d\\d\\d\\d\\d$'), Validators.required]),
    website: new FormControl('',[Validators.pattern('[a-zA-Z0-9]+(\\.[a-zA-Z0-9]+)+$'), Validators.required]),
  });

  constructor(
     private dataManager: DataManagerService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.form.patchValue({
      mail: this.dataManager.currentUser?.mail,
      password: this.dataManager.currentUser?.password,
      confirmPassword: this.dataManager.currentUser?.confirmPassword,
      nickname: this.dataManager.currentUser?.nickname,
      phoneNumber: this.dataManager.currentUser?.phoneNumber,
      website: this.dataManager.currentUser?.website
    })
  }

  onSubmit(){
    let passwordEquality = this.dataManager.passwordCheck(this.form.value.password, this.form.value.confirmPassword) ? true : false
    if(this.form.valid && passwordEquality){
      this.dataManager.updateUser(this.form.value,this.dataManager.currentUser?.id);
      this.form.reset()
      this.edit = false
      this.submited.emit(this.edit)
    }else{
      window.alert("user didn't updated becouse of invalid fields")
    }
  }
}
