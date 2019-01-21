import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from "./employee/employee.component";
import { LoginFormComponent } from "./login/login-form/login-form.component";
import { EmployeeFormComponent } from "./employee-form/employee-form.component";
import { AuthGuardService } from "./service/auth.guard.service";


const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'signup', component: LoginFormComponent },
    { path: 'main', canActivate:[AuthGuardService], component:  EmployeeComponent },
    { path: 'employee',canActivate:[AuthGuardService], component:  EmployeeFormComponent },
    
    { path: '**', redirectTo: '' } ]


@NgModule({
    imports: [
      // RouterModule.forRoot(appRoutes, {useHash: true})
      RouterModule.forRoot(appRoutes,{useHash: true})
    ],
    exports: [RouterModule]
  })
export class AppRoutingModule {

}
