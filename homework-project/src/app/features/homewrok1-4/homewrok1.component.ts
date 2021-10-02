import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';
import { User } from './entity/user.entity';

@Component({
  selector: 'app-homewrok1',
  templateUrl: './homewrok1.component.html',
  styleUrls: ['./homewrok1.component.scss']
})
export class Homewrok1Component implements OnInit {

  constructor(
    private http: HttpService
  ) { }

  ngOnInit(): void {
  }

  onRegister(user:User){
    user.token=this.tokenMaker()
    this.http.create(user).subscribe();
  }


  private tokenMaker(){
      let words = "abcdefghijklmnopkrstuvwqyzABCDEFGHIJKLMNOPQRSTUVWQYZ".split("")
      let i = 25;
      let token = []
        while(i>0){
          let j  = Math.floor(Math.random()*52)
          token[i]=words[j]
          i--;
        }
      return token.join("")
  }
}
