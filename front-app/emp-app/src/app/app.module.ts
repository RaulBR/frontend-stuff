import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material-imports';
import { EmployeeComponent } from './employee/employee.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { HeaderComponent } from './header/header.component';
import { HttpService } from './service/http.service';
import { LoginService } from './login/login.http.service';
import { EmployeeService } from './employee/employee.http.service';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from './service/localStorage';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { AuthService } from './service/auth';
import { AuthGuardService } from './service/auth.guard.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    EmployeeFormComponent,
    LoginFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule
    ],
  providers: [
    HttpService,
    LoginService,
    EmployeeService,
    LocalStorageService,
    AuthService,
    AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
