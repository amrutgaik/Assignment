import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { RegisterComponent } from './component/register/register.component';
import { ViewdataComponent } from './component/viewdata/viewdata.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { SingleViewComponent } from './component/single-view/single-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    RegisterComponent,
    ViewdataComponent,
    LoginComponent,
    SingleViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
