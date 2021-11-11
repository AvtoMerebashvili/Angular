import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ObservablesService } from '../../shared/services/observables.service';

@Injectable({
  providedIn: 'root'
})
export class SignGuard implements CanActivate {
  constructor(
    private route: Router,
    private observable:ObservablesService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if(localStorage.getItem('token')){
      this.route.navigate(['/Users'])
    }

    return true;
  }
  
}
