import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    mail: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  })
  
  constructor(
    private authentication:AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.form.valid){
      this.authentication.auth(this.form.value.mail,this.form.value.password)
    }else{
      window.alert("wrong fields")
    }
  }

}
