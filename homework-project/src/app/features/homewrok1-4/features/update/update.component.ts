import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataManagerService } from '../../services/data-manager.service';
import { HttpService } from '../../services/http.service';
import { User } from '../../entity/user.entity';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnChanges {

  @Input() user:User | undefined;
  @Output() submited = new EventEmitter()

  form:FormGroup = new FormGroup({
    mail: new FormControl('', [Validators.pattern('[a-zA-Z0-9.]+\\@[a-zA-Z]+(\\.[a-zA-Z]+)+$'), Validators.required]),
    password: new FormControl('',[Validators.minLength(7),Validators.pattern('^[a-zA-Z0-9]*$') ,Validators.required]) ,
    confirmPassword: new FormControl('',[Validators.minLength(7),Validators.pattern('^[a-zA-Z0-9]*$') , Validators.required]),
    nickname: new FormControl('', [Validators.pattern('^[a-zA-Z0-9\\-]*$'), Validators.required]),
    phoneNumber: new FormControl('+380',[Validators.pattern('(\\+380)\\d\\d\\d\\d\\d\\d\\d\\d\\d$'), Validators.required]),
    website: new FormControl('',[Validators.pattern('[a-zA-Z0-9]+(\\.[a-zA-Z0-9]+)+$'), Validators.required]),
  });

  constructor(
     private dataManager: DataManagerService,
     private http: HttpService,
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.form.patchValue({
      mail: this.user?.mail,
      password: this.user?.password,
      confirmPassword: this.user?.confirmPassword,
      nickname: this.user?.nickname,
      phoneNumber: this.user?.phoneNumber,
      website: this.user?.website
    })
  }

  onSubmit(){
    let passwordEquality = this.dataManager.passwordCheck(this.form.value.password, this.form.value.confirmPassword) ? true : false
    if(this.form.valid && passwordEquality){
      let updatedUser = this.form.value;
      updatedUser.id = this.user?.id
      updatedUser.token = this.user?.token
      this.http.update(updatedUser).subscribe()
      this.form.reset()
      this.submited.emit(updatedUser)
    }else{
      window.alert("user didn't updated becouse of invalid fields")
    }
   }
}
