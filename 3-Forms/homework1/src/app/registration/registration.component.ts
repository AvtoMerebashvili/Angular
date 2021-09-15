import { escapeRegExp } from '@angular/compiler/src/util';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors , Form} from '@angular/forms';
import { tap } from "rxjs/operators";
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{

  disableStatus: boolean | undefined = true;
  
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
    private dataService: DataManagerService
  ) {
  }

  ngOnInit(){
    this.form.valueChanges
    .pipe(
      tap(value=>{
        this.disable(this.passwordCheck(value.password,value.confirmPassword),value.checkBox) 
      })
    ).subscribe()
  }

  onSubmit(){
    if(this.form.valid){
      this.dataService.addUser(this.form.value);
      this.form.reset()
    }else{
      window.alert("user didn't registered becouse of invalid fields")
    }
  }

  private disable(pass:boolean | undefined, checkbox:boolean):void{
    pass == true && checkbox == true ? this.disableStatus = false : this.disableStatus = true
  }

  private passwordCheck(passw: string, confPassword:string | undefined): boolean{
    if(confPassword == passw)return true 
    else return false
  }
}
