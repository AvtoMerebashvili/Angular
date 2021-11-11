import { NgModule } from '@angular/core';
import { Homework2Component } from './homework2.component';
import { CurrencyComponent } from './currency/currency.component';
import { HttpServiceService } from './services/http-service.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    Homework2Component,
    CurrencyComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: "",
        component: Homework2Component,
      }
    ])
  ],
  providers:[
    HttpServiceService
  ],
  exports:[
    Homework2Component,
    CurrencyComponent,
  ]
})
export class Homework2Module { }
