import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component'
import { RouterModule } from '@angular/router';
import { SignGuard } from './guards/sign.guard'
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forRoot([
      {
        path: 'LogIn', 
        component: LoginComponent,
        canActivate: [SignGuard]
      },
    ]),
    SharedModule
  ],
  exports:[LoginComponent]
})
export class AuthModule { }
