import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component'
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignGuard } from './guards/sign.guard'



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'LogIn', 
        component: LoginComponent,
        canActivate: [SignGuard]
      },
    ])
  ],
  exports:[LoginComponent]
})
export class AuthModule { }
