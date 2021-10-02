import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './features/homewrok1-4/features/registration/registration.component';
import { ListComponent } from './features/homewrok1-4/features/list/list.component';
import { UpdateComponent } from './features/homewrok1-4/features/update/update.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { Homewrok1Component } from './features/homewrok1-4/homewrok1.component';
import { RouterModule } from '@angular/router';
import { Homework2Component } from './features/homework2/homework2.component';
import { CurrencyComponent } from './features/homework2/currency/currency.component';
import { HttpClientModule } from '@angular/common/http';
import { PeopleModule } from './features/homework3/people/people.module';
import { UserComponent } from './features/homewrok1-4/features/list/user/user.component';
import { LoginGuard } from './auth/guards/login.guard';
import { SignGuard } from './auth/guards/sign.guard';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ListComponent,
    UpdateComponent,
    TopBarComponent,
    Homewrok1Component,
    Homework2Component,
    CurrencyComponent,
    UserComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    PeopleModule,
    RouterModule.forRoot([
      {
        path: 'registration', 
        component: Homewrok1Component,
        canActivate: [SignGuard]
      },
      {
        path: 'currency', 
        component: Homework2Component
      },
      {
        path: 'Users', 
        component: ListComponent,
        canActivate: [LoginGuard]
      }
    ]),
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
