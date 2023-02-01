import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './mypages/signup/signup.component';
import { LoginComponent } from './mypages/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
