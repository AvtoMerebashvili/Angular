import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { HttpService } from './http.service';
import { ObservablesService } from './observables.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpService,
    private router: Router,
    private observables:ObservablesService
  ) { }

  auth(mail: string, password: string){
      this.http.all()
        .pipe(
          tap(users => {
            let user = users.filter(user => user.mail == mail && user.password == password)[0];
            if(user){
              localStorage.setItem("token", user.token);
              this.observables.token = user.token;
              this.router.navigate(['Users'])
            }else{
              alert('invalid username or password')
            }
          })
        ).subscribe()
  
  }

}
