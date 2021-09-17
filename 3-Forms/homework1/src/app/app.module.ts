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

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ListComponent,
    UpdateComponent,
    TopBarComponent,
    Homewrok1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
