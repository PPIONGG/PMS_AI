import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { PrimengModule } from './modules/primeng.module';
import { MaterialModule } from './modules/material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './dialog/login/about/about.component';
import { ContactComponent } from './dialog/login/contact/contact.component';
import { ForgotComponent } from './dialog/login/forgot/forgot.component';
import { HomeComponent } from './dialog/login/home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AlertsComponent } from './alerts/alerts.component';
import { SettingsComponent } from './settings/settings.component';
import { CreateaccountComponent } from './dialog/login/createaccount/createaccount.component';
import { MessageService } from 'primeng/api';
import { BtactiveService } from './service/btactive.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UsersComponent,
    AboutComponent,
    ContactComponent,
    ForgotComponent,
    HomeComponent,
    MenuComponent,
    AlertsComponent,
    SettingsComponent,
    CreateaccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    PrimengModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MessageService, BtactiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
