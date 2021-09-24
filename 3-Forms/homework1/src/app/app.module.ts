import { EventEmitter, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './homewrok1/registration/registration.component';
import { ListComponent } from './homewrok1/list/list.component';
import { UpdateComponent } from './homewrok1/update/update.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { Homewrok1Component } from './homewrok1/homewrok1.component';
import { RouterModule } from '@angular/router';
import { Homework2Component } from './homework2/homework2.component';
import { CurrencyComponent } from './homework2/currency/currency.component';
import { HttpClientModule } from '@angular/common/http';
import { PeopleModule } from './homework3/people/people.module'

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    PeopleModule,
    RouterModule.forRoot([
      {path: 'registration', component: Homewrok1Component},
      {path: 'currency', component: Homework2Component},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
