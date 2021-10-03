import { NgModule } from '@angular/core';
import { UpdateComponent } from './features/update/update.component';
import { Homewrok1Component } from './homewrok1.component';
import { ListComponent } from './features/list/list.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { UserComponent } from './features/list/user/user.component';
import { DataManagerService } from './services/data-manager.service';
import { HttpService } from './services/http.service';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    RegistrationComponent,
    ListComponent,
    UpdateComponent,
    Homewrok1Component,
    UserComponent,
  ],
  imports: [
    SharedModule
  ],
  providers:[
    DataManagerService,
    HttpService
  ],
  exports:[
    RegistrationComponent,
    ListComponent,
    UpdateComponent,
    Homewrok1Component,
    UserComponent,
  ]
})
export class Homework4Module { }
