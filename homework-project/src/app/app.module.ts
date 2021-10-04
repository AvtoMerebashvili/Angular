import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { Homework4Module } from './features/homewrok1-4/homework4.module';
import { RouterModule } from '@angular/router';
import { SignGuard } from './auth/guards/sign.guard';
import { LoginGuard } from './auth/guards/login.guard';
import { TopBarComponent } from './top-bar/top-bar.component';
import { Homewrok1Component } from './features/homewrok1-4/homewrok1.component';
import { ListComponent } from './features/homewrok1-4/features/list/list.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'registration', 
        component: Homewrok1Component,
        canActivate: [SignGuard]
      },
      {
        path: 'Users', 
        component: ListComponent,
        canActivate: [LoginGuard],
      },
      {
        path: 'currency', 
        loadChildren: () => import('./features/homework2/homework2.module').then(m => m.Homework2Module)
      },
      {
        path: 'employees',
        loadChildren: () => import ('./features/homework3/homework3.module').then(m => m.homework3Module)
      }

    ]),
    AuthModule,
    Homework4Module
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
