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
import { HeaderComponent } from './shared/header/header.component';
import { HttpService } from './service/http.service/http.service';
import { HttpLoginService } from './service/http.service/login.http.service';
import { HttpEmployeeService } from './service/http.service/employee.http.service';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from './service/localStorage';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { AuthGuardService } from './service/auth.guard.service';
import { SnackBarComponent } from './shared/snackbar/snackbar.component';
import { SnackBarService } from './shared/snackbar/snackbar.service';
import { LoginService } from './login/loginService';
import { PopupInputComponent } from './shared/popup-input/popup-input.component';
import { PopupInputOpen } from './shared/popup-input/popup-input-open.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    EmployeeFormComponent,
    LoginFormComponent,
    HeaderComponent,
    SnackBarComponent,
    PopupInputComponent
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
    HttpLoginService,
    HttpEmployeeService,
    LoginService,
    LocalStorageService,
    AuthGuardService,
    SnackBarService,
    PopupInputOpen],
  entryComponents:[
      SnackBarComponent,PopupInputComponent],
  bootstrap: [AppComponent,
    ]
    
})
export class AppModule { }
